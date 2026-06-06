    </main>
    <footer class="bg-gray-900 text-white pt-16 pb-8">
        <div class="container-custom">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <div>
                    <a href="index.php" class="inline-block mb-4">
                        <div class="w-16 h-16">
                            <img src="assets/images/logo-infa-white.png" alt="INFA" class="object-contain w-full h-full">
                        </div>
                    </a>
                    <p class="text-gray-400 mb-6 leading-relaxed text-sm">
                        Forger l'élite pour transformer l'État. L'INFA forme les futurs cadres
                        administratifs de Madagascar avec excellence et intégrité.
                    </p>
                </div>

                <div>
                    <h3 class="text-lg font-bold mb-4">Liens Rapides</h3>
                    <ul class="space-y-2 text-gray-400 text-sm">
                        <li><a href="apropos.php" class="hover:text-white transition-colors">À Propos</a></li>
                        <li><a href="formations.php" class="hover:text-white transition-colors">Formations</a></li>
                        <li><a href="actualites.php" class="hover:text-white transition-colors">Actualités</a></li>
                        <li><a href="faq.php" class="hover:text-white transition-colors">FAQ</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-bold mb-4">Étudiants</h3>
                    <ul class="space-y-2 text-gray-400 text-sm">
                        <li><a href="calendrier.php" class="hover:text-white transition-colors">Calendrier des Examens</a></li>
                        <li><a href="resultats.php" class="hover:text-white transition-colors">Résultats des Examens</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-bold mb-4">Contact</h3>
                    <ul class="space-y-3 text-gray-400 text-sm">
                        <li class="flex items-start space-x-2">
                            <span class="mt-1">📍</span>
                            <span>ANDROHIBE, Antananarivo, Madagascar</span>
                        </li>
                        <li class="flex items-center space-x-2">
                            <span>📧</span>
                            <span>infamadagascar@gmail.com</span>
                        </li>
                        <li class="flex items-center space-x-2">
                            <span>📞</span>
                            <span>+261 20 XX XXX XX</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                <p>© <?php echo date('Y'); ?> INFA Madagascar. Tous droits réservés.</p>
                <div class="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" class="hover:text-white">Mentions Légales</a>
                    <a href="#" class="hover:text-white">Confidentialité</a>
                </div>
            </div>
        </div>
    </footer>
    <script>
        // Simple mobile menu toggle
        const btn = document.getElementById('mobile-menu-btn');
        // Implementation omitted for brevity in header/footer, but can be added here
    </script>
</body>
</html>
