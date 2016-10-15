import s from 'App/App.scss'
export default class App extends React.Component {
  constructor() {
    super();

    this.contributors = [
      { firstName: "Mark", lastName: "Spencer", photo:"https://s-media-cache-ak0.pinimg.com/236x/f8/05/57/f80557a7988ad356772433c286505aae.jpg" },
      { firstName: "Jordan", lastName: "Salinger", photo:"http://cdn.lookanimals.com/pictures/favim.com/orig/201106/10/cute-dog-dogs-puppies-puppy-Favim.com-71516.jpg" },
      { firstName: "Carl", lastName: "Jung", photo:"https://www.askideas.com/media/79/Cute-Pembroke-Welsh-Corgi-Puppy.jpg" },
      { firstName: "Philip", lastName: "Dick", photo:"https://i.ytimg.com/vi/opKg3fyqWt4/hqdefault.jpg" },
      { firstName: "Charles", lastName: "Dickens", photo:"https://s-media-cache-ak0.pinimg.com/236x/ce/b8/54/ceb8544b65cfc8ab006b08d125884c60.jpg" },
      { firstName: "Alex", lastName: "Garland", photo:"http://www.puppyou.com/wp-content/uploads/cu/cute-cute-dog-s-breed.jpg" },
      { firstName: "Stephen", lastName: "Crane", photo:"http://www.wallon.ru/_ph/25/950223607.jpg" },
      { firstName: "Allen", lastName: "Ginsberg", photo:"http://cl.jroo.me/z3/O/1/D/e/a.baa-What-a-cute-white-dog..jpg" },
    ];

    this.fund = {
      contributions: [
        { amount: 100, contributor: { id: 2, firstName: "Carl", lastName: "Spencer", photo: "https://s-media-cache-ak0.pinimg.com/236x/f8/05/57/f80557a7988ad356772433c286505aae.jpg" } },
        { amount: 700, contributor: { id: 9, firstName: "Jack", lastName: "Bauer", photo: "http://cdn.lookanimals.com/pictures/favim.com/orig/201106/10/cute-dog-dogs-puppies-puppy-Favim.com-71516.jpg" } },
        { amount: 200, contributor: { id: 2, firstName: "Carl", lastName: "Spencer", photo: "https://s-media-cache-ak0.pinimg.com/236x/f8/05/57/f80557a7988ad356772433c286505aae.jpg" } },
        { amount: 800, contributor: { id: 3, firstName: "Allen", lastName: "Ginsberg", photo:"http://cl.jroo.me/z3/O/1/D/e/a.baa-What-a-cute-white-dog..jpg" } },
        { amount: 300, contributor: { id: 2, firstName: "Carl", lastName: "Spencer", photo: "https://s-media-cache-ak0.pinimg.com/236x/f8/05/57/f80557a7988ad356772433c286505aae.jpg" } },
        { amount: 300, contributor: { id: 3, firstName: "Allen", lastName: "Ginsberg", photo:"http://cl.jroo.me/z3/O/1/D/e/a.baa-What-a-cute-white-dog..jpg" } },
      ]
    };
  }

  render() {
    var pr = this.props;
    var props = {};
    props.contributors = this.contributors;
    props.fund = this.fund;

    return (
      <div className="appContainer">
        {React.Children.map(pr.children, function(child) {
          return React.cloneElement(child, props);
        })}
      </div>
    )
  }
}
