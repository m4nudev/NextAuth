import { Providers } from "@/app/providers";
import { Session } from "inspector/promises";
import CredentialsProvider from 'next-auth/providers/credentials';
import { callbackify } from "util";

export const NEXT_AUTH_CONFIG = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'email', type: 'text', placeholder: '' },
                password: { label: 'password', type: 'text', placeholder: '' },
            },
            async authorize(credentials: any) {
                return {
                    id: "user1",
                    name: "asd",
                    userId: "asd",
                    email: "randomEmail"
                };
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: async ({ user, token }: any) => {
            if (user) {
                token.uid = user.id;
            }
            return token;
        },
        session: ({ session, token, user }: any) => {
            if (session.user) {
                session.user.id = token.uid
            }
            return session
        }
    },
}

