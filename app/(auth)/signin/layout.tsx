// app/signup/layout.tsx
import type { ReactNode } from "react";

export default function SignupLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-2xl">
        <div>Medium</div>
        {children}
      </div>
    </div>
  );
}
