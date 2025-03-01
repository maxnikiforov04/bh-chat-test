import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { create } from "zustand";
import styled from "styled-components";
import { z } from "zod";
import {useNavigate} from "react-router";

const schema = z.object({
    username: z.string().email("Введите корректный email"),
    password: z.string().min(6, "Пароль должен содержать минимум 6 символов"),
});

type Inputs = z.infer<typeof schema>;

interface AuthState {
    user: { username: string; password: string } | null;
    login: (username: string, password: string) => void;
    logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
    user: JSON.parse(localStorage.getItem("user") || "null"),
    login: (username, password) => {
        const userData = { username, password };
        localStorage.setItem("user", JSON.stringify(userData));
        set({ user: userData });
    },
    logout: () => {
        localStorage.removeItem("user");
        set({ user: null });
    },
}));

const ModalWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
`;

const ModalContent = styled.div`
    background-color: #313E62;
    padding: 2rem;
    border-radius: 8px;
    color: white;
    width: 90%;
    max-width: 460px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const InputWrapper = styled.div`
    margin-bottom: 2rem;
`

const StyledInput = styled.input`
    width: 100%;
    height: 4rem;
    margin: 1rem 0;
    padding: 0 1rem;
    background-color: #121825;
    border: 0;
    color: white;
    font-size: 16px;
    border-radius: 8px;
    outline: none;
    box-sizing: border-box;

    &::placeholder {
        color: #8b949e;
    }
`;

const ErrorMessage = styled.p`
    color: #ff4d4d;
    font-size: 16px;
    position: fixed;
    margin: 0;
`;

const StyledButton = styled.button`
    width: 100%;
    height: 4rem;
    font-size: 16px;
    background-color: #1C64F2;
    border: none;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;
const Title = styled.h2`
    font-size: 22px;
    margin-bottom: 2rem;
`;
export function LoginForm() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver: zodResolver(schema),
    });

    const login = useAuthStore((state) => state.login);

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        login(data.username, data.password);
        navigate('/')
    };

    return (
        <ModalWrapper>
            <ModalContent>
                <Title>Авторизация</Title>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputWrapper>
                        <label >Email</label>
                        <StyledInput
                            type="text"
                            placeholder="Введите email"
                            {...register("username")}
                        />
                        {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
                    </InputWrapper>
                    <InputWrapper>
                    <label>Пароль</label>
                    <StyledInput
                        type="password"
                        placeholder="Введите пароль"
                        {...register("password")}
                    />
                    {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                    </InputWrapper>
                    <StyledButton type="submit">Войти</StyledButton>
                </form>
            </ModalContent>
        </ModalWrapper>
    );
}
