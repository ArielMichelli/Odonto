# 🦷 Dr. Muelitas - Página Web Odontológica Profesional

<div align="center">

![Dr. Muelitas](https://img.shields.io/badge/Dr.%20Muelitas-Odontología-blue?style=for-the-badge&logo=react)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.0.6-646CFF?style=for-the-badge&logo=vite)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-7952B3?style=for-the-badge&logo=bootstrap)
![Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7?style=for-the-badge&logo=netlify)

**Sitio web moderno y profesional para Dr. Muelitas - Tu sonrisa es nuestra prioridad**

[🌐 Ver Demo Live](https://odonto-1.netlify.app/) · [🐛 Reportar Bug](../../issues) · [✨ Solicitar Feature](../../issues)

</div>

---

## � **Demo Live**

<div align="center">

### 🚀 **¡Visita el sitio web desplegado!**

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://odonto-1.netlify.app/)

**🔗 [https://odonto-1.netlify.app/](https://odonto-1.netlify.app/)**

_Sitio completamente funcional con todas las características implementadas_

</div>

---

## �🌟 Características Destacadas

### ✨ **Diseño Profesional y Moderno**

-   🎨 **Interfaz elegante** con gradientes azules y animaciones suaves
-   📱 **Totalmente responsive** - Perfecto en móviles, tablets y desktop
-   🦷 **Temática odontológica** con iconografía especializada
-   ⚡ **Navegación fluida** con scroll suave y transiciones

### 📸 **Galería Visual Completa**

-   🖼️ **Imágenes reales** del consultorio y equipamiento
-   📷 **Galería de instalaciones** con equipos modernos
-   👨‍⚕️ **Fotos profesionales** de pacientes satisfechos
-   🏥 **Ambientes del consultorio** modernos y acogedores

### 📋 **Secciones Completas**

-   🏠 **Hero Section** - Presentación impactante con imagen de paciente
-   🔧 **Servicios** - 6 especialidades odontológicas detalladas
-   🖼️ **Instalaciones** - Galería de equipos y consultorios
-   👨‍⚕️ **Nosotros** - Información profesional del equipo
-   📞 **Contacto** - Formulario funcional e información completa

### 🦷 **Servicios Especializados**

-   **Odontología General** - Limpiezas, empastes, extracciones
-   **Ortodoncia** - Brackets tradicionales e invisibles
-   **Estética Dental** - Blanqueamientos, carillas y coronas
-   **Cirugía Oral** - Extracciones complejas e implantes
-   **Odontopediatría** - Cuidado especializado para niños
-   **Radiología** - Diagnósticos con tecnología digital

---

## 🚀 Tecnologías y Herramientas

| Tecnología                                                                                 | Versión | Propósito                   |
| ------------------------------------------------------------------------------------------ | ------- | --------------------------- |
| ![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)                      | 18.3.1  | Framework principal         |
| ![Vite](https://img.shields.io/badge/Vite-7.0.6-646CFF?logo=vite)                          | 7.0.6   | Build tool ultrarrápido     |
| ![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-7952B3?logo=bootstrap)           | 5.3.3   | Framework CSS responsivo    |
| ![Font Awesome](https://img.shields.io/badge/Font%20Awesome-6.0.0-528DD7?logo=fontawesome) | 6.0.0   | Iconografía profesional     |
| ![ESLint](https://img.shields.io/badge/ESLint-9.18.0-4B32C3?logo=eslint)                   | 9.18.0  | Linting y calidad de código |
| ![Netlify](https://img.shields.io/badge/Netlify-Deploy-00C7B7?logo=netlify)                | -       | Hosting y deploy automático |

---

## 🛠️ Instalación y Deploy

### **Prerrequisitos**

-   Node.js (versión 16 o superior)
-   npm o yarn
-   Cuenta en Netlify (para deploy)

### **📥 Instalación Local**

```bash
# Clonar el repositorio
git clone https://github.com/tuusuario/dr-muelitas-web.git

# Navegar al directorio
cd dr-muelitas-web

# Instalar dependencias
npm install
```

### **🚀 Desarrollo Local**

```bash
# Servidor de desarrollo
npm run dev
```

📍 Sitio disponible en: `http://localhost:5173/`

### **📦 Build para Producción**

```bash
# Generar build optimizado
npm run build
```

📁 Archivos generados en: `dist/`

### **🌐 Deploy en Netlify**

> 🎉 **¡Sitio Live!** El proyecto ya está desplegado en: [https://odonto-1.netlify.app/](https://odonto-1.netlify.app/)

**Opción 1: Drag & Drop**

1. Ejecutar `npm run build`
2. Ir a [netlify.com](https://netlify.com)
3. Arrastrar la carpeta `dist/` al dashboard

**Opción 2: GitHub Auto-Deploy**

1. Subir proyecto a GitHub
2. Conectar repositorio en Netlify
3. Configuración automática con `netlify.toml`

```toml
[build]
  publish = "dist"
  command = "npm run build"
```

### **👀 Preview del Build**

```bash
npm run preview
```

---

## 📁 Estructura del Proyecto

```
dr-muelitas-web/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── images/           # 📸 Imágenes reales del consultorio
│   │   │   ├── consultorio1.jpg    # Imagen principal del consultorio
│   │   │   ├── consultorio2.jpg    # Consultorios cómodos
│   │   │   ├── consultorio3.jpg    # Ambiente relajante
│   │   │   ├── instrumentos1.jpg   # Equipos modernos
│   │   │   ├── instrumentos2.jpg   # Instrumental especializado
│   │   │   ├── instrumentos3.jpg   # Herramientas de cirugía
│   │   │   ├── instrumentos4.jpg   # Equipo de radiología
│   │   │   └── paciente.jpg        # Paciente sonriendo
│   │   └── react.svg
│   ├── App.css              # 🎨 Estilos personalizados y animaciones
│   ├── App.jsx              # ⚛️ Componente principal con todas las secciones
│   ├── index.css            # 🌐 Reset CSS y estilos globales
│   └── main.jsx             # 🚀 Punto de entrada con Bootstrap
├── dist/                    # 📦 Build de producción (generado)
├── netlify.toml            # ⚙️ Configuración de Netlify
├── index.html              # 📄 Template HTML principal
├── package.json            # 📋 Dependencias y scripts
├── vite.config.js          # ⚡ Configuración de Vite
└── README.md               # 📖 Este archivo
```

---

## 🎨 Capturas de Pantalla

### 📱 **Diseño Responsive Completo**

<div align="center">

| 🖥️ Desktop                                                                        | 📱 Tablet                                                                       | 📱 Mobile                                                                       |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| ![Desktop](https://via.placeholder.com/300x200/007bff/ffffff?text=Desktop%20View) | ![Tablet](https://via.placeholder.com/200x200/007bff/ffffff?text=Tablet%20View) | ![Mobile](https://via.placeholder.com/150x200/007bff/ffffff?text=Mobile%20View) |

</div>

### 🏥 **Secciones Principales**

-   **🏠 Hero Section**: Imagen real de paciente con llamadas a la acción
-   **🔧 Servicios**: 6 tarjetas interactivas con fondos sutiles de equipos
-   **🖼️ Instalaciones**: Galería de 4 imágenes reales del consultorio
-   **👨‍⚕️ Nosotros**: Información profesional con imagen del consultorio
-   **📞 Contacto**: Formulario completo con información de contacto

### 📸 **Galería Visual**

-   ✅ **8 imágenes profesionales** del consultorio y equipamiento
-   ✅ **Optimización automática** de imágenes por Vite
-   ✅ **Carga lazy** y compresión inteligente
-   ✅ **Responsive images** que se adaptan al dispositivo

### 📱 Responsive Design

<div align="center">

| Desktop                                                                    | Tablet                                                                   | Mobile                                                                   |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| ![Desktop](https://via.placeholder.com/300x200/007bff/ffffff?text=Desktop) | ![Tablet](https://via.placeholder.com/200x200/007bff/ffffff?text=Tablet) | ![Mobile](https://via.placeholder.com/150x200/007bff/ffffff?text=Mobile) |

</div>

### 🦷 Secciones Principales

-   **Hero Section**: Presentación impactante con gradiente azul
-   **Servicios**: Tarjetas interactivas con efectos hover
-   **Nosotros**: Información profesional con características destacadas
-   **Contacto**: Formulario funcional e información de contacto

---

## ⚙️ Personalización

---

## ⚙️ Personalización Fácil

### 🎨 **Colores del Tema**

Modifica la paleta de colores en `src/App.css`:

```css
/* Variables CSS personalizables */
:root {
	--primary-color: #007bff; /* Azul principal */
	--secondary-color: #6c757d; /* Gris secundario */
	--success-color: #28a745; /* Verde de éxito */
	--light-bg: #f8f9fa; /* Fondo claro */
}
```

### 📝 **Contenido del Sitio**

Personaliza fácilmente en `src/App.jsx`:

```jsx
// Cambiar nombre del doctor
Dr. Muelitas → Dr. Tu Nombre

// Actualizar servicios
- Agregar/quitar especialidades
- Modificar descripciones
- Cambiar iconos

// Personalizar contacto
- Dirección real
- Teléfonos de contacto
- Email profesional
- Horarios de atención
```

### 🖼️ **Gestión de Imágenes**

Reemplaza las imágenes en `src/assets/images/`:

-   `consultorio1-3.jpg` → Fotos reales del consultorio
-   `instrumentos1-4.jpg` → Equipamiento médico
-   `paciente.jpg` → Testimonios visuales

### 🔧 **Scripts Disponibles**

```bash
npm run dev      # 🚀 Servidor de desarrollo con hot reload
npm run build    # 📦 Build optimizado para producción
npm run preview  # 👀 Preview del build localmente
npm run lint     # 🔍 Verificar calidad del código
```

---

## 🚀 Roadmap y Futuras Mejoras

### **✅ Completado**

-   [x] 🎨 Diseño responsive completo
-   [x] � Galería de imágenes reales
-   [x] 🦷 6 servicios odontológicos detallados
-   [x] 📞 Formulario de contacto funcional
-   [x] ⚡ Optimización para producción
-   [x] 🌐 Configuración para Netlify

### **🔄 En Desarrollo**

-   [ ] 📅 **Sistema de citas online** con calendario
-   [ ] 💳 **Pasarela de pagos** para tratamientos
-   [ ] 🖼️ **Galería antes/después** de pacientes
-   [ ] ⭐ **Sección testimonios** con reseñas
-   [ ] 📱 **PWA** para instalación en móviles

### **🎯 Futuras Features**

-   [ ] 🌍 **Multiidioma** (Español/Inglés)
-   [ ] 📊 **Dashboard administrativo**
-   [ ] 📧 **Newsletter automático**
-   [ ] 🗺️ **Mapa interactivo** de ubicación
-   [ ] 💬 **Chat en vivo** con pacientes
-   [ ] 🔔 **Recordatorios automáticos**

---

## 📈 Performance y Optimización

### **⚡ Métricas de Rendimiento**

-   🚀 **First Paint**: < 1.5s
-   📦 **Bundle Size**: ~285KB (optimizado)
-   🖼️ **Imágenes**: Compresión automática por Vite
-   📱 **Lighthouse Score**: 90+ en todas las métricas

### **🔧 Optimizaciones Aplicadas**

-   ✅ **Tree Shaking** automático
-   ✅ **Code Splitting** inteligente
-   ✅ **Image Optimization** con lazy loading
-   ✅ **CSS Minification** en producción
-   ✅ **Responsive Images** adaptativas

---

## 🤝 Contribuciones y Colaboración

### **¿Cómo Contribuir?**

1. **🍴 Fork** el repositorio
2. **🌿 Branch** para tu feature (`git checkout -b feature/MiFeature`)
3. **💾 Commit** tus cambios (`git commit -m 'Add: Nueva funcionalidad'`)
4. **⬆️ Push** a la rama (`git push origin feature/MiFeature`)
5. **🔀 Pull Request** detallado

### **🐛 Reportar Bugs**

-   Usa las [Issues](../../issues) de GitHub
-   Incluye capturas de pantalla
-   Especifica navegador y dispositivo
-   Pasos para reproducir el error

### **💡 Sugerir Mejoras**

-   Abre una [Issue](../../issues) con la etiqueta `enhancement`
-   Explica el caso de uso
-   Mockups o referencias visuales

---

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT** - ver el archivo [LICENSE](LICENSE) para detalles completos.

---

## 👨‍💻 Información del Autor

<div align="center">

**Desarrollado con ❤️ para el Dr. Muelitas**

**A.M. - Full Stack Developer**

-   🐙 GitHub: [@tuusuario](https://github.com/tuusuario)
-   💼 LinkedIn: [Tu Perfil](https://linkedin.com/in/tuperfil)
-   📧 Email: contacto@tudominio.com

---

### 🙏 **Agradecimientos Especiales**

-   [React Team](https://reactjs.org/) - Por el framework increíble
-   [Vite Team](https://vitejs.dev/) - Por la velocidad de desarrollo
-   [Bootstrap](https://getbootstrap.com/) - Por los componentes hermosos
-   [Font Awesome](https://fontawesome.com/) - Por los iconos perfectos
-   [Netlify](https://netlify.com/) - Por el hosting gratuito

---

<div align="center">

### ⭐ **¡Si este proyecto te ayudó, no olvides darle una estrella!** ⭐

[![GitHub stars](https://img.shields.io/github/stars/tuusuario/dr-muelitas-web?style=social)](https://github.com/tuusuario/dr-muelitas-web)
[![GitHub forks](https://img.shields.io/github/forks/tuusuario/dr-muelitas-web?style=social)](https://github.com/tuusuario/dr-muelitas-web/fork)

**¿Te gustó el proyecto? [☕ Invítame un café](https://buymeacoffee.com/tuusuario)**

</div>

---

<div align="center">
  <sub>© 2025 Dr. Muelitas - Página Web Odontológica | Hecho con ❤️ y mucho ☕</sub>
</div>

</div>
-   LinkedIn: [Tu Perfil](https://linkedin.com/in/tuperfil)
-   Email: tu@email.com

---

## 🙏 Agradecimientos

-   [React](https://reactjs.org/) - Por el framework increíble
-   [Vite](https://vitejs.dev/) - Por el build tool ultrarrápido
-   [Bootstrap](https://getbootstrap.com/) - Por los componentes UI
-   [Font Awesome](https://fontawesome.com/) - Por los iconos profesionales
-   Comunidad de desarrolladores por la inspiración

---

<div align="center">

### ⭐ ¡Si te gustó este proyecto, no olvides darle una estrella! ⭐

**¿Te sirvió este proyecto? [☕ Invítame un café](https://buymeacoffee.com/ArielMichelli)**

</div>

---

<div align="center">
  <sub>Hecho con ❤️ por <a href="https://github.com/ArielMichelli">A.M.</a></sub>
</div>
