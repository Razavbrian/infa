<?php
require_once 'includes/functions.php';
$page_title = 'Actualités';
include 'includes/header.php';

// Mock data
$actualites = [
    ['id' => 1, 'titre' => "Lancement de la nouvelle année académique", 'date' => "2024-03-15", 'categorie' => "Événement", 'resume' => "L'INFA accueille ses nouveaux étudiants pour une année placée sous le signe de l'excellence."],
    ['id' => 2, 'titre' => "Séminaire sur la modernisation de l'État", 'date' => "2024-03-10", 'categorie' => "Conférence", 'resume' => "Retour sur les échanges fructueux lors du séminaire organisé à l'INFA."],
    ['id' => 3, 'titre' => "Partenariat avec le Ministère de la Fonction Publique", 'date' => "2024-03-05", 'categorie' => "Annonce", 'resume' => "Signature d'une convention pour le renforcement des capacités des agents."],
    ['id' => 4, 'titre' => "Résultats du concours d'entrée 2024", 'date' => "2024-02-28", 'categorie' => "Annonce", 'resume' => "La liste des candidats admis est désormais disponible au tableau d'affichage."],
];
?>

<div class="min-h-screen bg-infa-fond">
    <!-- Hero -->
    <section class="bg-gradient-to-r from-infa-vert to-infa-vertDark text-white py-20">
        <div class="container-custom text-center">
            <h1 class="text-4xl md:text-5xl font-bold font-montserrat mb-4">Actualités & Événements</h1>
            <p class="text-xl max-w-2xl mx-auto">Restez informé des dernières nouvelles de l'INFA</p>
        </div>
    </section>

    <!-- Liste -->
    <section class="section-padding">
        <div class="container-custom">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <?php foreach ($actualites as $actu): ?>
                <article class="card-hover bg-white">
                    <div class="h-48 bg-gray-200 relative">
                        <div class="absolute top-4 left-4">
                            <span class="px-3 py-1 bg-infa-vert text-white text-xs font-bold rounded-full">
                                <?php echo $actu['categorie']; ?>
                            </span>
                        </div>
                    </div>
                    <div class="p-6">
                        <p class="text-sm text-gray-500 mb-2"><?php echo format_date_fr($actu['date']); ?></p>
                        <h3 class="text-xl font-bold font-montserrat text-gray-900 mb-3 line-clamp-2">
                            <?php echo $actu['titre']; ?>
                        </h3>
                        <p class="text-gray-600 text-sm mb-4 line-clamp-3">
                            <?php echo $actu['resume']; ?>
                        </p>
                        <a href="#" class="text-infa-vert font-semibold hover:underline">
                            Lire la suite →
                        </a>
                    </div>
                </article>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
</div>

<?php include 'includes/footer.php'; ?>
