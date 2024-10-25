# Dynamic Portfolio Generator

A modern, responsive portfolio website generator built with HTML, CSS, and JavaScript. Create your professional portfolio with a beautiful, animated interface and downloadable output.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean and professional interface with smooth animations
- **Dynamic Content**: Add and remove sections easily
- **Dark Theme**: Built-in dark mode with modern color scheme
- **Interactive Elements**: Animated hero section and hover effects
- **Downloadable Output**: Generate and download your portfolio as a standalone HTML file
- **Section Types**:
  - About Me
  - Projects
  - Skills
  - Personal Projects
  - Certifications & Courses
  - Internships
  - Education
  - Achievements
  - Extra-Curricular Activities
  - Contact Information

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- Basic understanding of HTML, CSS, and JavaScript (for customization)

### Installation

1. Clone the repository:
```bash  
git clone https://github.com/VazeerAhmed/Portfolio-Generator.git
```

2. Navigate to the project directory:
```bash
cd portfolio-generator
```

3. Open `index.html` in your web browser.

## 💻 Usage

1. Fill out the form sections with your information:
   - Basic personal details
   - About me section
   - Projects
   - Skills
   - Additional sections as needed

2. Click "Generate Portfolio" to create your portfolio

3. Click the download button in the navigation bar to save your portfolio as an HTML file

## 🎨 Customization

### Colors
The color scheme can be customized by modifying the CSS variables in `style.css`:

```css
:root {
    --primary: #1a202c;
    --secondary: #E50914;
    --text: #f7fafc;
    --background: #0f172a;
    --card-bg: #1e293b;
    --accent: #3b82f6;
    --gradient-start: #3b82f6;
    --gradient-end: #2563eb;
    --hover-color: #60a5fa;
}
```

### Fonts
The project uses 'Plus Jakarta Sans' by default. To change the font, modify the import statement and font-family in `style.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font+Choice:wght@400;500;600;700&display=swap');

* {
    font-family:  sans-serif;
}
```

## 📱 Responsive Design

The portfolio is responsive across different screen sizes:
- Desktop (> 768px)
- Tablet (≤ 768px)
- Mobile (< 480px)

Media queries in `style.css` handle the responsive layout adjustments.

## 🛠️ Technical Details

### File Structure
```
portfolio-generator/
├── index.html
├── style.css
├── scripts.js
├── README.md
└── ui.html
```

### Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts

### Key Components
- Dynamic form generation
- Local storage for data persistence
- Downloadable HTML generation
- CSS animations and transitions
- Responsive grid layouts

## 🔍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Plus Jakarta Sans font family

## 📞 Support

For support, please open an issue in the GitHub repository or contact [vazeerahmmadmohammad@gmail.com]

## 🔮 Future Enhancements

- Multiple theme options
- Custom section ordering
- Additional portfolio templates
- Image upload support
- PDF export option
- Custom domain support
