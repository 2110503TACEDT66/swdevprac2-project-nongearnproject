import bcrypt from 'bcryptjs';

export default async function userLogIn(userEmail: string, userPassword: string) {
    const hashedPassword = await bcrypt.hash(userPassword, 10); // Hash the password with bcrypt

    const response = await fetch("https://vaccine-app-backend.vercel.app:443/api/v1/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: userEmail,
            password: hashedPassword // Send the hashed password to the server
        }),
    });

    if (!response.ok) {
        throw new Error("Failed to log-in");
    }

    return await response.json();
}
