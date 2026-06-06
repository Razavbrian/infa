<?php
// php-site/includes/functions.php

require_once 'config.php';

/**
 * Fetches data from the Strapi API
 */
function fetch_from_api($endpoint) {
    $url = API_URL . '/api/' . $endpoint;

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json'
    ]);

    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($http_code === 200) {
        return json_decode($response, true);
    }

    return null;
}

/**
 * Helper to get Strapi Media URL
 */
function get_media_url($url) {
    if (!$url) return 'assets/images/placeholder.jpg';
    if (strpos($url, 'http') === 0) return $url;
    return API_URL . $url;
}

/**
 * Format date to French
 */
function format_date_fr($date_string) {
    if (!$date_string) return '';
    $date = new DateTime($date_string);
    $formatter = new IntlDateFormatter(
        'fr_FR',
        IntlDateFormatter::LONG,
        IntlDateFormatter::NONE
    );
    return $formatter->format($date);
}

/**
 * Shorten text
 */
function truncate_text($text, $length = 100) {
    if (strlen($text) <= $length) return $text;
    return substr($text, 0, $length) . '...';
}
?>
