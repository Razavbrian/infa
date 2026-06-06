<?php
require_once 'includes/functions.php';
$page_title = 'À Propos';
include 'includes/header.php';
?>

<div class="min-h-screen bg-infa-fond">
    <section class="bg-gradient-to-r from-infa-vert to-infa-vertDark text-white py-20">
        <div class="container-custom text-center">
            <h1 class="text-4xl md:text-5xl font-bold font-montserrat mb-4">À Propos de l'INFA</h1>
            <p class="text-xl max-w-2xl mx-auto">Découvrez notre histoire, notre mission et nos valeurs</p>
        </div>
    </section>

    <section class="section-padding bg-white">
        <div class="container-custom">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-3xl font-bold text-infa-vert mb-6">Notre Histoire</h2>
                <div class="prose prose-lg text-gray-700">
                    <p class="mb-4">
                        Érigé en Direction Générale en 2010, après avoir exercé en tant que centre de formation,
                        l’INFA consacre une réforme institutionnelle majeure dans l’architecture nationale de modernisation administrative.
                    </p>
                    <p class="mb-4">
                        Cette évolution marque une orientation stratégique assumée : faire du développement des compétences administratives
                        un fondement essentiel de l’efficacité et de la crédibilité de l’action publique.
                    </p>
                    <p>
                        L’INFA s’affirme aujourd’hui comme un instrument structurant du renforcement des capacités des cadres moyens
                        de l’ensemble des ministères, contribuant directement à l’amélioration durable de la gouvernance publique.
                    </p>
                </div>
            </div>
        </div>
    </section>
</div>

<?php include 'includes/footer.php'; ?>
