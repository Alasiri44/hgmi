// <iframe width="560" height="315" src="https://www.youtube.com/embed/l1WfWTc_AiY?si=L3eSSkNTvv_mLCpK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

type SermonProps = {
    videoId: string;
    title: string;
    preacher: string;

};

export default function SermonPlayer({ videoId, title }: SermonProps) {
    return (
        <div className="w-full max-w-sm mx-auto px-2 mb-6">
            <div className="relative group rounded-2xl overflow-hidden shadow-xl border-2 border-white ring-1 ring-emerald-100 bg-slate-900">
                <div className="relative aspect-video w-full">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <div className="mt-2 px-1">
                <h3 className="text-sm font-semibold text-slate-800 line-clamp-1">{title}</h3>
            </div>
        </div>
    );
}