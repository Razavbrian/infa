// backend/scripts/import-formations.js

const axios = require('axios');

// ============================================
// CONFIGURATION
// ============================================

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_ADMIN_EMAIL = process.env.STRAPI_ADMIN_EMAIL || 'fanomezanaclaude@gmail.com';
const STRAPI_ADMIN_PASSWORD = process.env.STRAPI_ADMIN_PASSWORD || 'Brcd042004';

// ============================================
// DONNÉES DES 19 FORMATIONS
// ============================================

const formations = [
  // FORMATIONS INITIALES (8)
  {
    titre: 'Attaché d\'administration',
    slug: 'attache-administration',
    type: 'initiale',
    description: 'Formation aux techniques de gestion administrative et de management public. Préparation aux fonctions d\'encadrement dans l\'administration publique.',
    duree: '2 ans',
    niveau: 'Bac+2',
    conditions: 'Baccalauréat ou équivalent. Concours d\'entrée obligatoire.',
    icone: '🎓',
    ordre_affichage: 1,
    publie: true,
  },
  {
    titre: 'Adjoint d\'administration',
    slug: 'adjoint-administration',
    type: 'initiale',
    description: 'Formation aux fonctions d\'appui et de soutien administratif. Acquisition des compétences de base en gestion administrative et secrétariat.',
    duree: '1 an',
    niveau: 'Bac',
    conditions: 'Baccalauréat. Sélection sur dossier.',
    icone: '📋',
    ordre_affichage: 2,
    publie: true,
  },
  {
    titre: 'Assistant d\'administration',
    slug: 'assistant-administration',
    type: 'initiale',
    description: 'Formation intermédiaire pour les fonctions d\'assistance et de coordination administrative. Gestion des dossiers et accueil du public.',
    duree: '18 mois',
    niveau: 'Bac+1',
    conditions: 'Bac ou Bac+1. Concours ou sélection sur dossier.',
    icone: '📁',
    ordre_affichage: 3,
    publie: true,
  },
  {
    titre: 'Contrôleur de commerce',
    slug: 'controleur-commerce',
    type: 'initiale',
    description: 'Formation au contrôle et à la régulation des activités commerciales. Inspection des commerces et protection des consommateurs.',
    duree: '2 ans',
    niveau: 'Bac+2',
    conditions: 'Bac+2 en économie, droit ou commerce. Concours d\'entrée.',
    icone: '🏪',
    ordre_affichage: 4,
    publie: true,
  },
  {
    titre: 'Contrôleur de domaine',
    slug: 'controleur-domaine',
    type: 'initiale',
    description: 'Formation spécialisée dans le contrôle et la supervision des domaines publics et fonciers. Gestion du patrimoine immobilier de l\'État.',
    duree: '2 ans',
    niveau: 'Bac+2',
    conditions: 'Bac+2 en droit, géographie ou aménagement. Concours.',
    icone: '🏛️',
    ordre_affichage: 5,
    publie: true,
  },
  {
    titre: 'Contrôleur de travail',
    slug: 'controleur-travail',
    type: 'initiale',
    description: 'Formation au contrôle du respect de la législation du travail. Inspection des conditions de travail et médiation sociale.',
    duree: '2 ans',
    niveau: 'Bac+2',
    conditions: 'Bac+2 en droit ou sciences sociales. Concours d\'entrée.',
    icone: '👷',
    ordre_affichage: 6,
    publie: true,
  },
  {
    titre: 'Contrôleur de poste',
    slug: 'controleur-poste',
    type: 'initiale',
    description: 'Formation au contrôle et à la gestion des services postaux et de télécommunications. Supervision des centres de tri et distribution.',
    duree: '18 mois',
    niveau: 'Bac+1',
    conditions: 'Bac ou Bac+1. Sélection sur dossier et entretien.',
    icone: '📮',
    ordre_affichage: 7,
    publie: true,
  },
  {
    titre: 'Agent d\'exploitation de poste',
    slug: 'agent-exploitation-poste',
    type: 'initiale',
    description: 'Formation opérationnelle à l\'exploitation et la gestion des bureaux de poste. Services postaux, financiers et accueil client.',
    duree: '1 an',
    niveau: 'Bac',
    conditions: 'Baccalauréat. Sélection sur dossier.',
    icone: '📬',
    ordre_affichage: 8,
    publie: true,
  },
  
  // FORMATIONS CONTINUES - CYCLE COURT (10)
  {
    titre: 'Gestion des documents administratifs',
    slug: 'gestion-documents-administratifs',
    type: 'continue',
    description: 'Maîtrisez les techniques de classement, archivage et gestion des documents administratifs. Organisation et optimisation des flux documentaires.',
    duree: '5 jours',
    niveau: 'Professionnels',
    conditions: 'Professionnels en activité. Aucun prérequis spécifique.',
    icone: '📁',
    ordre_affichage: 9,
    publie: true,
  },
  {
    titre: 'Comptabilités matières',
    slug: 'comptabilites-matieres',
    type: 'continue',
    description: 'Formation à la gestion comptable des stocks et matières. Suivi des mouvements, inventaires et valorisation des stocks.',
    duree: '5 jours',
    niveau: 'Professionnels',
    conditions: 'Professionnels en activité. Notions de base en comptabilité souhaitées.',
    icone: '📊',
    ordre_affichage: 10,
    publie: true,
  },
  {
    titre: 'Marché public',
    slug: 'marche-public',
    type: 'continue',
    description: 'Maîtrisez les procédures de passation et de gestion des marchés publics. Réglementation, appels d\'offres et exécution des contrats.',
    duree: '5 jours',
    niveau: 'Professionnels',
    conditions: 'Professionnels en activité. Expérience en administration souhaitée.',
    icone: '📋',
    ordre_affichage: 11,
    publie: true,
  },
  {
    titre: 'Technique de secrétariat',
    slug: 'technique-secretariat',
    type: 'continue',
    description: 'Perfectionnement aux techniques modernes de secrétariat. Accueil, gestion d\'agenda, rédaction de courriers et organisation de réunions.',
    duree: '5 jours',
    niveau: 'Professionnels',
    conditions: 'Professionnels en activité. Expérience en secrétariat souhaitée.',
    icone: '📞',
    ordre_affichage: 12,
    publie: true,
  },
  {
    titre: 'Éthique et déontologie de l\'administration',
    slug: 'ethique-deontologie-administration',
    type: 'continue',
    description: 'Formation aux principes éthiques et déontologiques de la fonction publique. Intégrité, transparence et responsabilité dans l\'exercice des fonctions.',
    duree: '3 jours',
    niveau: 'Professionnels',
    conditions: 'Professionnels en activité dans le secteur public.',
    icone: '⚖️',
    ordre_affichage: 13,
    publie: true,
  },
  {
    titre: 'Langues vivantes (Anglais/Français)',
    slug: 'langues-vivantes',
    type: 'continue',
    description: 'Perfectionnement en langues étrangères appliquées à l\'administration. Communication professionnelle, rédaction et traduction de documents.',
    duree: '10 jours',
    niveau: 'Tous niveaux',
    conditions: 'Professionnels en activité. Test de niveau à l\'inscription.',
    icone: '🗣️',
    ordre_affichage: 14,
    publie: true,
  },
  {
    titre: 'Protocole et savoir-vivre',
    slug: 'protocole-savoir-vivre',
    type: 'continue',
    description: 'Maîtrisez les règles de protocole et de savoir-vivre dans l\'administration. Accueil des personnalités, organisation d\'événements officiels.',
    duree: '3 jours',
    niveau: 'Professionnels',
    conditions: 'Professionnels en activité, notamment en charge de l\'accueil.',
    icone: '🤝',
    ordre_affichage: 15,
    publie: true,
  },
  {
    titre: 'Correspondance administrative',
    slug: 'correspondance-administrative',
    type: 'continue',
    description: 'Techniques de rédaction administrative. Courriers, notes, rapports et procès-verbaux. Style clair, concis et conforme aux normes.',
    duree: '5 jours',
    niveau: 'Professionnels',
    conditions: 'Professionnels en activité. Maîtrise du français requise.',
    icone: '✍️',
    ordre_affichage: 16,
    publie: true,
  },
  {
    titre: 'Élaboration de budget',
    slug: 'elaboration-budget',
    type: 'continue',
    description: 'Formation à la conception et au suivi budgétaire. Techniques de prévision, allocation des ressources et contrôle de l\'exécution budgétaire.',
    duree: '5 jours',
    niveau: 'Professionnels',
    conditions: 'Professionnels en activité. Notions de base en finances publiques.',
    icone: '💰',
    ordre_affichage: 17,
    publie: true,
  },
  {
    titre: 'Planification et développement',
    slug: 'planification-developpement',
    type: 'continue',
    description: 'Méthodes et outils de planification stratégique. Élaboration de plans de développement, suivi-évaluation et gestion de projets.',
    duree: '5 jours',
    niveau: 'Professionnels',
    conditions: 'Professionnels en activité, notamment en charge de la planification.',
    icone: '📈',
    ordre_affichage: 18,
    publie: true,
  },
  
  // FORMATIONS CONTINUES - CYCLE LONG (1)
  {
    titre: 'Administration générale',
    slug: 'administration-generale',
    type: 'continue',
    description: 'Cycle de perfectionnement en administration générale pour les professionnels souhaitant approfondir leurs compétences en gestion publique et évoluer vers des postes de responsabilité.',
    duree: '6 mois',
    niveau: 'Professionnels confirmés',
    conditions: 'Professionnels avec 3 ans d\'expérience minimum. Sélection sur dossier et entretien.',
    icone: '💼',
    ordre_affichage: 19,
    publie: true,
  },
];

// ============================================
// FONCTIONS UTILITAIRES
// ============================================

// Obtenir un token d'authentification Admin
async function getAdminToken() {
  try {
    const response = await axios.post(`${STRAPI_URL}/admin/api/auth/login`, {
      email: STRAPI_ADMIN_EMAIL,
      password: STRAPI_ADMIN_PASSWORD,
    });
    
    return response.data.data.token;
  } catch (error) {
    console.error('❌ Échec de l\'authentification Admin Strapi');
    console.error('   Vérifiez vos identifiants dans .env');
    console.error('   Email:', STRAPI_ADMIN_EMAIL);
    throw error;
  }
}

// Vérifier si une formation existe déjà
async function checkFormationExists(slug, token) {
  try {
    const response = await axios.get(
      `${STRAPI_URL}/api/formations?filters[slug][$eq]=${slug}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    
    return response.data.data.length > 0;
  } catch (error) {
    console.error(`   Erreur vérification ${slug}:`, error.message);
    return false;
  }
}

// Créer une formation
async function createFormation(formation, token) {
  try {
    await axios.post(
      `${STRAPI_URL}/api/formations`,
      { data: formation },
      {
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    
    return true;
  } catch (error) {
    console.error(`   Erreur création "${formation.titre}":`, error.response?.data?.error?.message || error.message);
    return false;
  }
}

// ============================================
// FONCTION PRINCIPALE
// ============================================

async function importFormations() {
  console.log('🚀 Démarrage de l\'import des formations...\n');
  console.log(`📍 URL Strapi : ${STRAPI_URL}`);
  console.log(`👤 Admin : ${STRAPI_ADMIN_EMAIL}\n`);
  
  let token;
  let successCount = 0;
  let skipCount = 0;
  let errorCount = 0;
  
  try {
    // 1. Obtenir le token admin
    console.log('🔑 Connexion à Strapi Admin...');
    token = await getAdminToken();
    console.log('✅ Authentifié avec succès\n');
    
    // 2. Importer chaque formation
    console.log('📚 Import des formations...\n');
    
    for (const formation of formations) {
      process.stdout.write(`   ${formation.titre}... `);
      
      // Vérifier si existe déjà
      const exists = await checkFormationExists(formation.slug, token);
      
      if (exists) {
        console.log('⏭️  Déjà existante');
        skipCount++;
        continue;
      }
      
      // Créer la formation
      const created = await createFormation(formation, token);
      
      if (created) {
        console.log('✅ Créée');
        successCount++;
      } else {
        console.log('❌ Échec');
        errorCount++;
      }
      
      // Petite pause pour éviter de surcharger l'API
      await new Promise(resolve => setTimeout(resolve, 200));
    }
    
    // 3. Résumé
    console.log('\n' + '='.repeat(60));
    console.log('📊 RÉSUMÉ DE L\'IMPORT');
    console.log('='.repeat(60));
    console.log(`✅ Succès : ${successCount} formations`);
    console.log(`⏭️  Déjà existantes : ${skipCount} formations`);
    console.log(`❌ Échecs : ${errorCount} formations`);
    console.log(`📈 Total : ${formations.length} formations`);
    console.log('='.repeat(60));
    
    if (successCount > 0) {
      console.log('\n🎉 Import terminé avec succès !\n');
      console.log('👉 Vérifiez dans Strapi Admin : http://localhost:1337/admin');
      console.log('👉 Puis visitez : http://localhost:3000/formations\n');
    }
    
  } catch (error) {
    console.error('\n❌ ERREUR CRITIQUE :', error.message);
    console.error('\n💡 Solutions possibles :');
    console.error('   1. Vérifiez que Strapi tourne : npm run develop');
    console.error('   2. Vérifiez les identifiants admin dans .env');
    console.error('   3. Vérifiez que le Content Type "Formation" existe\n');
    process.exit(1);
  }
}

// ============================================
// LANCER LE SCRIPT
// ============================================

importFormations();