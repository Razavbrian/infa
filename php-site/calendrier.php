<?php
require_once 'includes/functions.php';
$page_title = 'Calendrier des Examens';
include 'includes/header.php';

$examens = [
    ['matiere' => 'Droit Administratif', 'date' => '2024-06-15 08:30', 'salle' => 'Amphi A', 'type' => 'Écrit'],
    ['matiere' => 'Comptabilité Publique', 'date' => '2024-06-16 08:30', 'salle' => 'Salle 102', 'type' => 'Écrit'],
    ['matiere' => 'Management des Organisations', 'date' => '2024-06-17 14:00', 'salle' => 'Amphi B', 'type' => 'Écrit'],
];
?>

<div class="min-h-screen bg-infa-fond">
    <section class="bg-gradient-to-r from-infa-vert to-infa-vertDark text-white py-16">
        <div class="container-custom">
            <h1 class="text-4xl font-bold mb-4">📅 Calendrier des Examens</h1>
            <p class="text-xl text-white/90">Consultez les dates des prochaines épreuves</p>
        </div>
    </section>

    <section class="section-padding">
        <div class="container-custom">
            <div class="bg-white rounded-xl shadow-md overflow-hidden">
                <table class="w-full">
                    <thead class="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th class="text-left py-4 px-6 text-gray-700">Matière</th>
                            <th class="text-left py-4 px-6 text-gray-700">Date & Heure</th>
                            <th class="text-left py-4 px-6 text-gray-700">Salle</th>
                            <th class="text-left py-4 px-6 text-gray-700">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($examens as $ex): ?>
                        <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                            <td class="py-4 px-6 font-medium text-gray-800"><?php echo $ex['matiere']; ?></td>
                            <td class="py-4 px-6 text-gray-600"><?php echo $ex['date']; ?></td>
                            <td class="py-4 px-6 text-gray-600"><?php echo $ex['salle']; ?></td>
                            <td class="py-4 px-6"><span class="px-2 py-1 bg-gray-100 rounded text-xs"><?php echo $ex['type']; ?></span></td>
                        </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</div>

<?php include 'includes/footer.php'; ?>
