import './output.css'

const Marquee = () => (
    <div className="relative flex overflow-x-hidden">
      <div className="py-2 -rotate-45 animate-marquee whitespace-nowrap">
        <span className="text-4xl mx-4">🏸 🍆 💦 🍑 HAPPY</span>
        <span className="text-4xl mx-4">🏸 🍆 💦 🍑 HAPPY</span>
        <span className="text-4xl mx-4">🏸 🍆 💦 🍑 HAPPY</span>
        <span className="text-4xl mx-4">🏸 🍆 💦 🍑 HAPPY</span>
        <span className="text-4xl mx-4">🏸 🍆 💦 🍑 HAPPY</span>
      </div>

      <div className="absolute top-0 py-2 animate-marquee2 whitespace-nowrap">
        <span className="text-4xl mx-4">🏸 🍆 💦 🍑 HAPPY</span>
        <span className="text-4xl mx-4">🏸 🍆 💦 🍑 HAPPY</span>
        <span className="text-4xl mx-4">🏸 🍆 💦 🍑 HAPPY</span>
        <span className="text-4xl mx-4">🏸 🍆 💦 🍑 HAPPY</span>
        <span className="text-4xl mx-4">🏸 🍆 💦 🍑 HAPPY</span>
      </div>
    </div>
)

export default Marquee
