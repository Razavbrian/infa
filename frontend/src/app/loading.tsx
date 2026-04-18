export default function Loading() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-infa-fond">
        <div className="text-center">
          <div className="loading-spinner w-16 h-16 border-4 mx-auto mb-4" />
          <p className="text-infa-vert font-medium animate-pulse">
            Chargement en cours...
          </p>
        </div>
      </div>
    );
  }