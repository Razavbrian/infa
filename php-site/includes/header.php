<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo isset($page_title) ? $page_title . ' | ' . SITE_NAME : SITE_NAME; ?></title>
    <meta name="description" content="Forger l'élite pour transformer l'État. L'INFA forme les futurs cadres administratifs de Madagascar avec excellence et intégrité.">

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">

    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        infa: {
                            vert: '#007E5E',
                            vertDark: '#005C44',
                            vertLight: '#009972',
                            rouge: '#FC3D32',
                            or: '#D4AF37',
                            fond: '#F9F9F9',
                            texte: '#1A1A1A',
                            gris: '#6B7280',
                        }
                    },
                    fontFamily: {
                        montserrat: ['Montserrat', 'sans-serif'],
                        opensans: ['Open Sans', 'sans-serif'],
                    }
                }
            }
        }
    </script>

    <style type="text/css">
        body { font-family: 'Open Sans', sans-serif; background-color: #F9F9F9; color: #1A1A1A; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Montserrat', sans-serif; }
        .btn-primary {
            @apply px-8 py-3 bg-infa-vert text-white font-bold rounded-full
                   hover:bg-infa-vertDark transition-all duration-300
                   transform hover:scale-105 shadow-lg;
        }
        .btn-secondary {
            @apply px-8 py-3 border-2 border-white text-white font-bold rounded-full
                   hover:bg-white hover:text-infa-vert transition-all duration-300;
        }
        .section-padding { @apply py-16 md:py-24; }
        .container-custom { @apply container mx-auto px-4 md:px-8 max-w-7xl; }
        .nav-link { @apply text-gray-700 hover:text-infa-vert font-medium transition-colors relative; }
        .card-hover { @apply bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2; }
    </style>
</head>
<body class="antialiased min-h-screen flex flex-col">
    <header class="fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm py-4 shadow-sm">
        <div class="container-custom">
            <div class="flex justify-between items-center">
                <a href="index.php" class="flex items-center space-x-3 group">
                    <div class="relative w-12 h-12">
                        <img src="assets/images/logo-infa-white.png" alt="INFA" class="object-contain w-full h-full">
                    </div>
                    <div class="hidden md:block">
                        <h1 class="text-xl font-bold text-infa-vert">INFA</h1>
                        <p class="text-xs text-gray-500">Institut National de Formation Administrative</p>
                    </div>
                </a>

                <nav class="hidden lg:flex items-center space-x-6">
                    <a href="index.php" class="nav-link">Accueil</a>
                    <a href="formations.php" class="nav-link">Formations</a>
                    <a href="calendrier.php" class="nav-link">Calendrier</a>
                    <a href="resultats.php" class="nav-link">Résultats</a>
                    <a href="actualites.php" class="nav-link">Actualités</a>
                    <a href="contact.php" class="nav-link">Contact</a>
                </nav>

                <div class="hidden lg:block">
                    <a href="contact.php" class="btn-primary py-2 text-sm">Nous contacter</a>
                </div>

                <!-- Mobile Menu Button (Simplified) -->
                <button class="lg:hidden text-gray-700 p-2" id="mobile-menu-btn">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div>
        </div>
    </header>
    <main class="flex-grow pt-20">
