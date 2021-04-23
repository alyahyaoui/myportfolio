//? getters and setters make you able to access properties and modify em from outside of the class
import Header from './modules/header.js';
import Drawer from './modules/drawer.js';
import Main from './modules/main.js';
import Footer from './modules/footer.js';
class App {
    static render() {
        const root = document.getElementById('app');
        root.append(new Header().render(), new Drawer(['todo', 'habit', 'exprense']).render(), new Main().render(), new Footer().render());
    }
}
App.render();
