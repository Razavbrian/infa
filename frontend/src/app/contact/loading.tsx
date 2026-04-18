export default function ContactLoading() {
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl h-96 animate-pulse" />
              <div className="space-y-8">
                <div className="bg-white rounded-2xl h-64 animate-pulse" />
                <div className="bg-white rounded-2xl h-48 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }