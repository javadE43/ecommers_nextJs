export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full min-h-full flex justify-center items-center">
            <div className="flex flex-col py-4 px-4 rounded-lg w-[400px]  overflow-hidden border-[1px] border-[#3f4064] gap-y-4 d__rtl">
                {children}
            </div>
        </div>
    );
}
