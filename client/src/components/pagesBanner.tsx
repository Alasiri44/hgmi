export default function PageBanner({ title, subheading, paragraph }: any) {
    return (
        <section className="relative w-full overflow-hidden bg-[#FDF9F0] py-20 px-6 border-b border-emerald-200">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 opacity-40">
                {/* A soft emerald glow in the corner */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-100 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-50 rounded-full blur-3xl"></div>
            </div>

            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.15]" 
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23065f46' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
            </div>

            <div className="relative max-w-4xl mx-auto text-center">
                {/* Subheading with accent lines */}
                <div className="flex items-center justify-center gap-4 mb-3">
                    <div className="h-[1px] w-8 bg-emerald-200"></div>
                    <span className="text-emerald-700 font-bold uppercase tracking-[0.3em] text-xs md:text-sm">
                        {subheading}
                    </span>
                    <div className="h-[1px] w-8 bg-emerald-200"></div>
                </div>

                {/* Title with Serif Font */}
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 drop-shadow-sm">
                    {title}
                </h1>

                {/* Paragraph */}
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium opacity-90">
                    {paragraph}
                </p>

                {/* Bottom Decorative Divider */}
                <div className="mt-10 flex justify-center items-center gap-2">
                    <div className="h-1 w-1 bg-emerald-400 rounded-full"></div>
                    <div className="h-1.5 w-12 bg-emerald-500 rounded-full"></div>
                    <div className="h-1 w-1 bg-emerald-400 rounded-full"></div>
                </div>
            </div>
        </section>
    );
}