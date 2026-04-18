export default function FormationsLoading() {
    return (
      <div className="min-h-screen bg-infa-fond">
        <div className="bg-gradient-to-r from-infa-vert to-infa-vertDark py-20">
          <div className="container-custom">
            <div className="h-12 bg-white/20 rounded w-64 mb-4 animate-pulse" />
            <div className="h-6 bg-white/20 rounded w-96 animate-pulse" />
          </div>
        </div>
        <div className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-xl h-96 animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }