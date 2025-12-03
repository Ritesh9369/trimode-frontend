import news1 from "../assets/news/blog-1.png";
import news2 from "../assets/news/blog-2.png";
import news3 from "../assets/news/blog-3.png";

const NewsInsightsSection = () => {
  const newsList = [
    {
      img: news1,
      title:
        "Reliable logistic solutions ensuring timely, secure and cost-effective deliveries.",
      date: "15 Nov 2025"
    },
    {
      img: news2,
      title:
        "Dedicated to consistently raising service standards delivering exceptional quality.",
      date: "21 Nov 2025"
    },
    {
      img: news3,
      title:
        "Empowering traders to identify, report and stop human trafficking worldwide.",
      date: "25 Dec 2025"
    }
  ];

  return (
    <section className="py-20">
      <div className="text-center mb-12" data-aos="fade-up">
        <p className="text-red-600 font-semibold uppercase mb-1">
          News & Insights
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Latest Trends in Logistics & Transportation
        </h2>
      </div>

      <div
        className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6"
        data-aos="fade-up"
      >
        {newsList.map((item, idx) => (
          <div
            key={idx}
            className="shadow-lg rounded-lg overflow-hidden hover:-translate-y-1 transition"
          >
            <img src={item.img} className="w-full" />
            <div className="px-6 py-6">
              <p className="text-gray-500 text-sm mb-2">{item.date}</p>
              <h3 className="font-bold text-lg mb-4">{item.title}</h3>
              <button className="text-red-600 font-semibold">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsInsightsSection;
