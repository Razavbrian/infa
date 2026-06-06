<?php
require_once 'includes/functions.php';
$page_title = 'FAQ';
include 'includes/header.php';

$faqs = [
    ['q' => "Quelles sont les conditions d'admission ?", 'a' => "Les conditions d'admission varient selon la formation. Généralement, un baccalauréat est requis pour les formations diplômantes."],
    ['q' => "Comment s'inscrire ?", 'a' => "Les inscriptions se font en ligne via notre site web ou directement à notre secrétariat durant les périodes d'ouverture."],
    ['q' => "Quels sont les frais de formation ?", 'a' => "Les frais varient selon le type de formation. Contactez-nous pour obtenir les tarifs détaillés."],
];
?>

<div class="min-h-screen bg-infa-fond">
    <section class="bg-gradient-to-r from-infa-vert to-infa-vertDark text-white py-20">
        <div class="container-custom text-center">
            <h1 class="text-4xl md:text-5xl font-bold font-montserrat mb-4">Questions Fréquentes</h1>
            <p class="text-xl max-w-2xl mx-auto">Trouvez les réponses à vos questions</p>
        </div>
    </section>

    <section class="section-padding">
        <div class="container-custom max-w-4xl">
            <div class="space-y-4">
                <?php foreach ($faqs as $faq): ?>
                <div class="bg-white rounded-xl shadow-md overflow-hidden">
                    <div class="px-6 py-4 border-b border-gray-100 font-bold text-gray-800">
                        <?php echo $faq['q']; ?>
                    </div>
                    <div class="px-6 py-4 text-gray-600">
                        <?php echo $faq['a']; ?>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
</div>

<?php include 'includes/footer.php'; ?>
