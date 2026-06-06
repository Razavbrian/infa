<?php
require_once 'includes/functions.php';
$page_title = 'Résultats des Examens';
include 'includes/header.php';

$resultats = [
    ['titre' => 'Attaché d\'Administration - Session 2024', 'type' => 'initiale', 'date' => '2024-07-20'],
    ['titre' => 'Adjoint d\'Administration - Session 2024', 'type' => 'initiale', 'date' => '2024-07-21'],
    ['titre' => 'Management Public - Session Continue', 'type' => 'continue', 'date' => '2024-07-25'],
];
?>

<div class="min-h-screen bg-infa-fond">
    <section class="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-12">
        <div class="container-custom">
            <h1 class="text-4xl font-bold mb-4">📊 Résultats des Examens</h1>
            <p class="text-xl text-white/90">Consultez les résultats officiels</p>
        </div>
    </section>

    <section class="section-padding">
        <div class="container-custom">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <?php foreach ($resultats as $res): ?>
                <div class="card-hover p-6 bg-white">
                    <span class="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 <?php echo $res['type'] === 'initiale' ? 'bg-infa-vert text-white' : 'bg-purple-600 text-white'; ?>">
                        <?php echo ucfirst($res['type']); ?>
                    </span>
                    <h3 class="text-lg font-bold text-gray-800 mb-3"><?php echo $res['titre']; ?></h3>
                    <p class="text-sm text-gray-500 mb-6">Publié le <?php echo format_date_fr($res['date']); ?></p>
                    <a href="#" class="btn-primary w-full block text-center text-sm">📥 Télécharger le PDF</a>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
</div>

<?php include 'includes/footer.php'; ?>
