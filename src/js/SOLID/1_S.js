// Single Responsibility Principle

class News {
  constructor(title, text) {
    this.title = title;
    this.text = text;
    this.modified = false;
  }

  update(text) {
    this.text = text;
    this.modified = true;
  }
}

class NewsPrinter {
  constructor(news) {
    this.news = news;
  }

  toHTML() {
    return `
      <div class="news">
        <h1>${this.news.title}</h1>
        <p>${this.news.text}</p>
      </div>
      `;
  }

  toJSON() {
    return JSON.stringify(
      {
        title: this.news.title,
        text: this.news.text,
        modified: this.news.modified,
      },
      null,
      2
    );
  }

  xml() {
    return `
      <news>
      <title>${this.news.title}</title>
      <text>${this.news.text}</text>
      </news>
      `;
  }
}

const printer = new NewsPrinter(new News("Fly", "New Airpot was buit"));

console.log(printer.toHTML());
console.log(printer.toJSON());
console.log(printer.xml());
