import {withErrorBoundary} from 'react-error-boundary'
import {QueryClientProvider} from './with-query-client.tsx'
import {BrowserRouter} from './with-router.tsx'
import {ToastifyContainerProvider} from "./with-toastify.tsx";
import {withSuspense} from "@app/providers/with-suspence.tsx";
import {Spinner} from "@shared/ui/spinner";
import {FullPageError} from "@pages/error/full-page-error.ui.tsx";
import {CenteredWrapper} from "@shared/ui/centered-wrapper";

function Providers() {
    // TODO: удалить некст темы

    return (
        <QueryClientProvider>
            <BrowserRouter/>
            <ToastifyContainerProvider/>
        </QueryClientProvider>
    );
}

const SuspenseProvider = withSuspense(Providers, {
    fallback:
        <CenteredWrapper>
            <Spinner/>
        </CenteredWrapper>,
});
export const Provider = withErrorBoundary(SuspenseProvider, {
    // <FullPageError error={error} />
    fallbackRender: ({error}) => <FullPageError error={error}/>,
});
