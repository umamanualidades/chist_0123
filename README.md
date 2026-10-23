# Chistalia estática

Extrae el ZIP y sube **los archivos y carpetas que contiene**, no el ZIP, a la raíz del repositorio. Conserva `.nojekyll` y `CNAME`.

En Settings → Pages selecciona Deploy from a branch, rama main, carpeta / (root). La web está preparada para el dominio chistalia.es y para la raíz de un servidor; no para la subcarpeta github.io/nombre-repositorio/.

Antes de cambiar DNS configura y verifica el dominio en GitHub Pages. Comprueba HTTPS y las páginas antes de apagar el alojamiento anterior. Cloudflare puede gestionar el DNS/proxy sin PHP.

Las valoraciones se muestran como histórico, sin nuevos votos. Los chistes aleatorios y el índice funcionan en el navegador. El contenido no se actualiza automáticamente desde WordPress.

GitHub Pages no interpreta .htaccess. Las rutas históricas compatibles tienen una página de traslado HTML. Las redirecciones HTTP 301 originales deben configurarse en Cloudflare con el mapa entregado aparte.

No contiene WordPress, base de datos, credenciales ni scripts PHP.
