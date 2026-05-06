export const Footer = () => {
  return (
    <div className="flex items-center justify-center h-20">
      <p className="text-sm font-bold text-[#f15a38]">
        {`© Copyright ${new Date().getFullYear()} Foodpedia. All rights reserved.`}
      </p>
    </div>
  )
}