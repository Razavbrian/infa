<?php
require_once 'includes/functions.php';
$page_title = 'Contactez-nous';
include 'includes/header.php';

$success = false;
$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Simple simulation of form submission
    $nom = $_POST['nom'] ?? '';
    $email = $_POST['email'] ?? '';
    $message = $_POST['message'] ?? '';

    if (!empty($nom) && !empty($email) && !empty($message)) {
        $success = true;
    } else {
        $error = 'Veuillez remplir tous les champs obligatoires.';
    }
}
?>

<div class="min-h-screen bg-infa-fond">
    <section class="bg-gradient-to-r from-infa-vert to-infa-vertDark text-white py-20">
        <div class="container-custom text-center">
            <h1 class="text-4xl md:text-5xl font-bold font-montserrat mb-4">Contactez-nous</h1>
            <p class="text-xl max-w-2xl mx-auto">Une question ? Notre équipe est là pour vous répondre</p>
        </div>
    </section>

    <section class="section-padding">
        <div class="container-custom">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Formulaire -->
                <div class="bg-white rounded-2xl shadow-md p-8">
                    <h2 class="text-2xl font-bold text-infa-vert mb-6">Envoyez-nous un message</h2>

                    <?php if ($success): ?>
                    <div class="bg-green-50 text-green-700 p-4 rounded-lg mb-6 border-l-4 border-green-500">
                        <p class="font-semibold">✓ Message envoyé avec succès !</p>
                        <p class="text-sm mt-1">Nous vous répondrons sous 48h.</p>
                    </div>
                    <?php endif; ?>

                    <?php if ($error): ?>
                    <div class="bg-red-50 text-red-700 p-4 rounded-lg mb-6 border-l-4 border-red-500">
                        ✗ <?php echo $error; ?>
                    </div>
                    <?php endif; ?>

                    <form action="contact.php" method="POST" class="space-y-6">
                        <div>
                            <label class="block text-gray-700 font-medium mb-2 text-sm">Nom complet *</label>
                            <input type="text" name="nom" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-infa-vert outline-none" placeholder="Votre nom">
                        </div>
                        <div>
                            <label class="block text-gray-700 font-medium mb-2 text-sm">Email *</label>
                            <input type="email" name="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-infa-vert outline-none" placeholder="votre@email.com">
                        </div>
                        <div>
                            <label class="block text-gray-700 font-medium mb-2 text-sm">Sujet *</label>
                            <select name="sujet" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-infa-vert outline-none bg-white">
                                <option value="">Sélectionnez un sujet</option>
                                <option value="inscription">Inscription à une formation</option>
                                <option value="information">Information générale</option>
                                <option value="partenariat">Partenariat</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-gray-700 font-medium mb-2 text-sm">Message *</label>
                            <textarea name="message" required rows="5" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-infa-vert outline-none" placeholder="Votre message..."></textarea>
                        </div>
                        <button type="submit" class="btn-primary w-full">Envoyer le message</button>
                    </form>
                </div>

                <!-- Infos -->
                <div class="space-y-8">
                    <div class="bg-white rounded-2xl shadow-md p-8">
                        <h3 class="text-xl font-bold text-infa-vert mb-6">Nos Coordonnées</h3>
                        <div class="space-y-6">
                            <div class="flex items-start space-x-4">
                                <div class="w-12 h-12 bg-infa-vert/10 rounded-full flex items-center justify-center">📍</div>
                                <div>
                                    <h4 class="font-semibold text-gray-800">Adresse</h4>
                                    <p class="text-gray-600">ANDROHIBE, Antananarivo, Madagascar</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-4">
                                <div class="w-12 h-12 bg-infa-vert/10 rounded-full flex items-center justify-center">📧</div>
                                <div>
                                    <h4 class="font-semibold text-gray-800">Email</h4>
                                    <p class="text-gray-600">infamadagascar@gmail.com</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-4">
                                <div class="w-12 h-12 bg-infa-vert/10 rounded-full flex items-center justify-center">📞</div>
                                <div>
                                    <h4 class="font-semibold text-gray-800">Téléphone</h4>
                                    <p class="text-gray-600">+261 20 XX XXX XX</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<?php include 'includes/footer.php'; ?>
