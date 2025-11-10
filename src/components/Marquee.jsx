const Marquee = ({ list, xSpacingInRem = 5, ySpacingInRem = 2 }) => {
  return (
    <div
      style={{ padding: `${ySpacingInRem}rem 0` }}
      className="w-full flex overflow-hidden bg-transparent"
    >
      <div
        className="flex w-max animate-marquee" // cannot have gap
      >
        {list.map((item, idx) => (
          <div
            key={`collab-${idx}`}
            style={{ margin: `0 ${xSpacingInRem / 2 }rem`}}
            className="w-42 h-28 shrink-0"
          >
            <img
              alt={item.company}
              src={item.logo}
              className="h-full w-full object-contain object-center"
            />
          </div>
        ))}

        {/* Duplicate of items */}
        {list.map((item, idx) => (
          <div
            aria-hidden="true"
            key={`collab-dup-${idx}`}
            style={{ margin: `0 ${xSpacingInRem / 2 }rem`}}
            className="w-42 h-28 shrink-0"
          >
            <img
              alt={item.company}
              src={item.logo}
              className="h-full w-full object-contain object-center"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Marquee