<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wp_ggg');

/** MySQL database username */
define('DB_USER', 'test');

/** MySQL database password */
define('DB_PASSWORD', '123456');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '$;,{.#Ch@+8QHo2sB^?KC$Hx5_0HWW 6+brs+S(kn[23qgw~eV)D.oxvfqL95}}n');
define('SECURE_AUTH_KEY',  'rg/ep7?fXU%Ca5[m *Wr&QxB08.B56s#Q]l[!8[k?-]}n*;:;Z``EgK~f?re<tG0');
define('LOGGED_IN_KEY',    ']l:qEG$.4B[1qg?&4og[3[MBkt/_@6*>/ 5j=#2T#<eTfW(eh[5]<|*F(2<p?]LY');
define('NONCE_KEY',        'SVnvoXq}pH?5=T0_^4mb+If+%{%A+?pg4nq{xTf,!XCSGdMDeUTU wI@%{B{Cp-D');
define('AUTH_SALT',        'zYJ~Lnz>5WghXTx`P7!{Q8B[wC<6#IT(G|~xc_bmJPx$(dw9Fyi~bL5^]c 0vgw=');
define('SECURE_AUTH_SALT', 'k;rB-oF,qIJ}{h(y#WJ7E49IOo[{-*5<Ms2bZuI?Tt5=65hT7x&}R-0G]XjV-$_:');
define('LOGGED_IN_SALT',   'uzx.An`5SRj/8y0zQ}L_qM]_Jn J5Q{=o5;y`k)`X@%Jc_3efrBU+Qlje4A(kw&3');
define('NONCE_SALT',       '@bs;0b~*v_O~2$b~XMhoE$a@2hGEWn>tzC;]>ghdlv-hME6x0EVh%GQFJKl[6QiM');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
