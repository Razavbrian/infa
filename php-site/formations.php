<?php
require_once 'includes/functions.php';
$page_title = 'Nos Formations';
include 'includes/header.php';

// Simulate API data if API not available
$formations = [
    ['id' => 1, 'titre' => "Attaché d'Administration", 'type' => 'initiale', 'description' => "Formation des cadres moyens pour l'administration publique.", 'duree' => '2 ans', 'niveau' => 'Bac+2', 'icone' => '🎓'],
    ['id' => 2, 'titre' => "Adjoint d'Administration", 'type' => 'initiale', 'description' => "Formation de base pour le support administratif.", 'duree' => '1 an', 'niveau' => 'Bac', 'icone' => '📝'],
    ['id' => 3, 'titre' => "Management Public", 'type' => 'continue', 'description' => "Perfectionnement pour les agents déjà en activité.", 'duree' => '6 mois', 'niveau' => 'Professionnel', 'icone' => '💼'],
    ['id' => 4, 'titre' => "Droit Administratif", 'type' => 'initiale', 'description' => "Spécialisation dans les procédures administratives.", 'duree' => '2 ans', 'niveau' => 'Bac+2', 'icone' => '⚖️'],
    ['id' => 5, 'titre' => "Gestion de Projet Public", 'type' => 'continue', 'description' => "Maîtriser les outils de gestion de projet dans le secteur public.", 'duree' => '3 mois', 'niveau' => 'Professionnel', 'icone' => '📊'],
];

$type_filter = isset($_GET['type']) ? $_GET['type'] : 'toutes';

$filtered_formations = ($type_filter === 'toutes')
    ? $formations
    : array_filter($formations, function($f) use ($type_filter) { return $f['type'] === $type_filter; });
?>

<div class="min-h-screen bg-infa-fond">
    <!-- Hero -->
    <section class="bg-gradient-to-r from-infa-vert to-infa-vertDark text-white py-20">
        <div class="container-custom text-center">
            <h1 class="text-4xl md:text-5xl font-bold font-montserrat mb-4">Nos Formations d'Excellence</h1>
            <p class="text-xl max-w-2xl mx-auto">Choisissez le parcours qui transformera votre carrière</p>
        </div>
    </section>

    <!-- Filtres -->
    <section class="py-12 bg-white border-b">
        <div class="container-custom">
            <div class="flex justify-center space-x-4">
                <a href="formations.php?type=toutes" class="px-6 py-2 rounded-full font-medium <?php echo $type_filter === 'toutes' ? 'bg-infa-vert text-white' : 'bg-gray-100 text-gray-700'; ?>">Toutes</a>
                <a href="formations.php?type=initiale" class="px-6 py-2 rounded-full font-medium <?php echo $type_filter === 'initiale' ? 'bg-infa-vert text-white' : 'bg-gray-100 text-gray-700'; ?>">Initiale</a>
                <a href="formations.php?type=continue" class="px-6 py-2 rounded-full font-medium <?php echo $type_filter === 'continue' ? 'bg-infa-vert text-white' : 'bg-gray-100 text-gray-700'; ?>">Continue</a>
            </div>
        </div>
    </section>

    <!-- Liste -->
    <section class="section-padding">
        <div class="container-custom">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <?php foreach ($filtered_formations as $formation): ?>
                <div class="card-hover">
                    <div class="h-40 bg-gray-100 flex items-center justify-center text-7xl relative">
                        <span><?php echo $formation['icone']; ?></span>
                        <div class="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold <?php echo $formation['type'] === 'initiale' ? 'bg-infa-vert text-white' : 'bg-purple-600 text-white'; ?>">
                            <?php echo ucfirst($formation['type']); ?>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-800 mb-3"><?php echo $formation['titre']; ?></h3>
                        <p class="text-gray-600 text-sm mb-4"><?php echo $formation['description']; ?></p>
                        <div class="flex justify-between text-xs text-gray-500 font-semibold uppercase tracking-wider">
                            <span>📅 <?php echo $formation['duree']; ?></span>
                            <span>🎯 <?php echo $formation['niveau']; ?></span>
                        </div>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
</div>

<?php include 'includes/footer.php'; ?>
