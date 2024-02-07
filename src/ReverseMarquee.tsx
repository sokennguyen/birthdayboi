import './output.css'

const Marquee = () => (
    <div className="relative flex overflow-x-hidden">
      <div className="py-2  animate-rmarquee whitespace-nowrap">
        <span className="text-4xl mx-4">🏸 🍆 💦 🍑 BIRTHDAY</span>
        <span className="text-4xl mx-4">🏸 🍆 💦 🍑 BIRTHDAY</span>
        <span className="text-4xl mx-4">🏸 🍆 💦 🍑 BIRTHDAY</span>
        <span className="text-4xl mx-4">🏸 🍆 💦 🍑 BIRTHDAY</span>
      </div>

      <div className="absolute top-0 py-2 animate-rmarquee2 whitespace-nowrap">
        <span className="text-4xl mx-4">🏸 🍆 💦 🍑 BIRTHDAY</span>
        <span className="text-4xl mx-4">🏸 🍆 💦 🍑 BIRTHDAY</span>
        <span className="text-4xl mx-4">🏸 🍆 💦 🍑 BIRTHDAY</span>
        <span className="text-4xl mx-4">🏸 🍆 💦 🍑 BIRTHDAY</span>
      </div>
    </div>
)

export default Marquee
