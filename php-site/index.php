<?php
require_once 'includes/functions.php';
$page_title = 'Accueil';
include 'includes/header.php';
?>

<!-- Hero Section -->
<section class="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900 text-white">
    <video
        autoPlay
        loop
        muted
        playsInline
        class="absolute inset-0 w-full h-full object-cover opacity-40"
    >
        <source src="assets/videos/infa-hero.mp4" type="video/mp4" />
    </video>

    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-80"></div>

    <div class="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold font-montserrat mb-6 leading-tight">
            Ensemble, batissons une administration
            <span class="text-infa-vert"> moderne, responsable et durable</span>
        </h1>

        <p class="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            L'INFA, l'institut de référence où l'expertise administrative devient
            le levier d'un Madagascar moderne et durable
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="formations.php" class="btn-primary">
                Découvrir nos formations
            </a>
            <a href="contact.php" class="btn-secondary">
                Nous contacter
            </a>
        </div>
    </div>

    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div class="w-6 h-10 border-2 border-white rounded-full flex justify-center animate-bounce">
            <div class="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
    </div>
</section>

<!-- Mot du Directeur Général -->
<section class="section-padding bg-white">
    <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <!-- Photo du DG -->
            <div class="relative">
                <div class="relative w-full max-w-md mx-auto aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                        src="assets/images/DG.png"
                        alt="Directeur Général INFA"
                        class="object-cover w-full h-full"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-infa-vert/30 to-transparent"></div>

                    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white px-4 w-full">
                        <p class="font-bold text-lg drop-shadow-lg">
                            Dr Chrétien JAOROBY
                        </p>
                        <p class="text-sm text-white/90 drop-shadow">
                            Directeur Général de l'INFA
                        </p>
                    </div>
                </div>
                <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-infa-or/20 rounded-full blur-2xl"></div>
            </div>

            <!-- Message du DG -->
            <div>
                <div class="border-l-4 border-infa-vert pl-6 py-4 bg-gray-50 rounded-r-xl">
                    <h2 class="text-4xl font-bold font-montserrat text-infa-vert mb-6">
                        Mot du Directeur Général
                    </h2>
                    <div class="prose prose-lg text-gray-700">
                        <p class="mb-4">
                            Chers futurs cadres, chers partenaires,
                        </p>
                        <p class="mb-4 text-sm md:text-base">
                            Depuis sa mutation historique en Direction Générale en 2010, l'Institut National
                            de Formation Administrative (INFA) a changé de dimension. Fort de l'héritage de sept
                            successions de leadership, en cette 8ᵉ direction générale, l'institut amorce
                            une transformation radicale pour devenir le moteur incontournable de la modernisation
                            de l'administration publique.
                        </p>
                        <p class="mb-6 text-sm md:text-base">
                            Notre mission est claire : former des cadres moyens compétents, intègres et performants
                            pour l'ensemble des ministères, afin qu'ils deviennent de véritables piliers du
                            développement durable de notre administration.
                        </p>
                        <div class="mt-8 pt-4 border-t border-gray-200">
                            <p class="font-bold text-infa-vert text-xl">
                                Dr Chrétien JAOROBY
                            </p>
                            <p class="text-gray-500">
                                Administrateur Civil en chef
                            </p>
                            <p class="text-gray-500">
                                Directeur Général de l'INFA
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Mission -->
<section class="section-padding bg-infa-vert text-white">
    <div class="container-custom">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-4xl font-bold font-montserrat mb-8 text-center">
                Notre Mission
            </h2>

            <p class="text-xl md:text-2xl leading-relaxed mb-8 text-center text-white/90">
                « L'Institut a pour vocation de former des cadres administratifs compétents, intègres et orientés performance, capables de : »
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                    <div class="text-3xl mb-3">✅</div>
                    <p class="text-lg leading-relaxed">Garantir un service public efficace, efficient et responsable</p>
                </div>
                <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                    <div class="text-3xl mb-3">🔒</div>
                    <p class="text-lg leading-relaxed">Promouvoir les principes d'éthique, de transparence et de redevabilité</p>
                </div>
                <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                    <div class="text-3xl mb-3">📈</div>
                    <p class="text-lg leading-relaxed">Soutenir durablement la performance institutionnelle</p>
                </div>
            </div>

            <p class="text-xl md:text-2xl leading-relaxed text-center text-white/90 mt-8 pt-8 border-t border-white/20">
                « La qualité de l'administration dépend de la qualité de ses ressources humaines.
                <span class="font-bold text-infa-or"> L'INFA en constitue l'un des piliers fondamentaux.</span> »
            </p>
        </div>
    </div>
</section>

<!-- Valeurs -->
<section class="section-padding bg-infa-fond">
    <div class="container-custom">
        <div class="text-center mb-16">
            <h2 class="text-4xl font-bold font-montserrat text-infa-vert mb-4">
                Nos 4 Piliers
            </h2>
            <p class="text-gray-600 max-w-2xl mx-auto">
                Pour incarner ce renouveau sous l'égide de la nouvelle direction générale
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Excellence -->
            <div class="card-hover p-8 bg-white border border-gray-100">
                <div class="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-3xl mb-6">🏆</div>
                <h3 class="text-xl font-bold font-montserrat text-infa-vert mb-3">L'Excellence</h3>
                <p class="text-gray-600 leading-relaxed">Nous visons la performance absolue à travers un enseignement de haut niveau.</p>
            </div>
            <!-- Innovation -->
            <div class="card-hover p-8 bg-white border border-gray-100">
                <div class="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-3xl mb-6">💡</div>
                <h3 class="text-xl font-bold font-montserrat text-infa-vert mb-3">L'Innovation</h3>
                <p class="text-gray-600 leading-relaxed">Nous transformons l'administration par l'adoption de nouvelles technologies.</p>
            </div>
            <!-- Intégrité -->
            <div class="card-hover p-8 bg-white border border-gray-100">
                <div class="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-3xl mb-6">⚖️</div>
                <h3 class="text-xl font-bold font-montserrat text-infa-vert mb-3">L'Intégrité</h3>
                <p class="text-gray-600 leading-relaxed">Nous forgeons des serviteurs de l'État exemplaires et transparents.</p>
            </div>
            <!-- Efficience -->
            <div class="card-hover p-8 bg-white border border-gray-100">
                <div class="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-3xl mb-6">📈</div>
                <h3 class="text-xl font-bold font-montserrat text-infa-vert mb-3">L'Efficience</h3>
                <p class="text-gray-600 leading-relaxed">Nous cultivons le sens du résultat et l'optimisation des ressources.</p>
            </div>
        </div>
    </div>
</section>

<!-- Formations Preview -->
<section class="section-padding bg-white">
    <div class="container-custom">
        <div class="flex justify-between items-end mb-12">
            <div>
                <h2 class="text-4xl font-bold font-montserrat text-infa-vert mb-4">Nos Formations</h2>
                <p class="text-gray-600">Découvrez nos programmes d'excellence</p>
            </div>
            <a href="formations.php" class="text-infa-vert font-bold hover:underline">Voir tout →</a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Formation 1 -->
            <div class="card-hover">
                <div class="h-48 bg-gray-100 flex items-center justify-center text-6xl">🎓</div>
                <div class="p-6">
                    <span class="inline-block px-3 py-1 bg-infa-vert/10 text-infa-vert text-xs font-bold rounded-full mb-4">Initiale</span>
                    <h3 class="text-xl font-bold mb-2 text-gray-800">Attaché d'Administration</h3>
                    <p class="text-gray-600 text-sm mb-4">Formation des cadres moyens pour l'administration publique.</p>
                    <a href="formations.php" class="text-infa-vert font-semibold hover:underline">En savoir plus</a>
                </div>
            </div>
            <!-- Formation 2 -->
            <div class="card-hover">
                <div class="h-48 bg-gray-100 flex items-center justify-center text-6xl">💼</div>
                <div class="p-6">
                    <span class="inline-block px-3 py-1 bg-purple-100 text-purple-600 text-xs font-bold rounded-full mb-4">Continue</span>
                    <h3 class="text-xl font-bold mb-2 text-gray-800">Management Public</h3>
                    <p class="text-gray-600 text-sm mb-4">Perfectionnement pour les agents déjà en activité.</p>
                    <a href="formations.php" class="text-infa-vert font-semibold hover:underline">En savoir plus</a>
                </div>
            </div>
            <!-- Formation 3 -->
            <div class="card-hover">
                <div class="h-48 bg-gray-100 flex items-center justify-center text-6xl">⚖️</div>
                <div class="p-6">
                    <span class="inline-block px-3 py-1 bg-infa-vert/10 text-infa-vert text-xs font-bold rounded-full mb-4">Initiale</span>
                    <h3 class="text-xl font-bold mb-2 text-gray-800">Droit Administratif</h3>
                    <p class="text-gray-600 text-sm mb-4">Spécialisation dans les procédures administratives.</p>
                    <a href="formations.php" class="text-infa-vert font-semibold hover:underline">En savoir plus</a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Actualités Preview -->
<section class="section-padding bg-gray-50">
    <div class="container-custom">
        <div class="flex justify-between items-end mb-12">
            <div>
                <h2 class="text-4xl font-bold font-montserrat text-infa-vert mb-4">Dernières Actualités</h2>
                <p class="text-gray-600">Restez informé de la vie de l'institut</p>
            </div>
            <a href="actualites.php" class="text-infa-vert font-bold hover:underline">Toutes les actus →</a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Actu 1 -->
            <article class="card-hover bg-white">
                <div class="h-48 bg-gray-200"></div>
                <div class="p-6">
                    <p class="text-xs text-gray-500 mb-2">15 Mars 2024</p>
                    <h3 class="text-xl font-bold mb-3 text-gray-800">Lancement de la nouvelle année académique</h3>
                    <p class="text-gray-600 text-sm mb-4 line-clamp-2">L'INFA accueille ses nouveaux étudiants pour une année placée sous le signe de l'excellence.</p>
                    <a href="actualites.php" class="text-infa-vert font-semibold hover:underline">Lire la suite</a>
                </div>
            </article>
            <!-- Actu 2 -->
            <article class="card-hover bg-white">
                <div class="h-48 bg-gray-200"></div>
                <div class="p-6">
                    <p class="text-xs text-gray-500 mb-2">10 Mars 2024</p>
                    <h3 class="text-xl font-bold mb-3 text-gray-800">Séminaire sur la modernisation de l'État</h3>
                    <p class="text-gray-600 text-sm mb-4 line-clamp-2">Retour sur les échanges fructueux lors du séminaire organisé à l'INFA.</p>
                    <a href="actualites.php" class="text-infa-vert font-semibold hover:underline">Lire la suite</a>
                </div>
            </article>
            <!-- Actu 3 -->
            <article class="card-hover bg-white">
                <div class="h-48 bg-gray-200"></div>
                <div class="p-6">
                    <p class="text-xs text-gray-500 mb-2">05 Mars 2024</p>
                    <h3 class="text-xl font-bold mb-3 text-gray-800">Partenariat avec le Ministère de la Fonction Publique</h3>
                    <p class="text-gray-600 text-sm mb-4 line-clamp-2">Signature d'une convention pour le renforcement des capacités des agents.</p>
                    <a href="actualites.php" class="text-infa-vert font-semibold hover:underline">Lire la suite</a>
                </div>
            </article>
        </div>
    </div>
</section>

<!-- CTA -->
<section class="section-padding bg-infa-vert text-white text-center">
    <div class="container-custom">
        <h2 class="text-4xl font-bold font-montserrat mb-6 text-white">Prêt à rejoindre l'INFA ?</h2>
        <p class="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
            Contactez notre équipe pédagogique pour plus d'informations sur nos cursus et les modalités d'inscription.
        </p>
        <a href="contact.php" class="btn-secondary">Nous Contacter</a>
    </div>
</section>

<?php include 'includes/footer.php'; ?>
