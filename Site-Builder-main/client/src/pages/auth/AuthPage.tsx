import { useParams } from "react-router-dom"
import { AuthView } from "@daveyplate/better-auth-ui"

export default function AuthPage() {
    const { pathname } = useParams()

    return (
        <main className="p-6 flex flex-col items-center h-[80vh] justify-center">
            <AuthView pathname={pathname} 
            classNames={{ base: 'bg-black/10 ring ring-indigo-900' }} />
        </main>
    )
}