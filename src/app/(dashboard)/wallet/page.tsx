import WalletSection from "@/components/WalletSection"

const Wallet = () => {
  return (
    <div className='p-6'>
      <p className="text-[18px] sm:text-[20px] md:text-[32px] lg:text-[45px] text-lightGreey font-semibold">Кошелек</p>
      <div className='bg-white h-[249px] my-12 mb-24 shadow-lg w-[100%]'>
        <WalletSection />
      </div>
    </div>
  )
}

export default Wallet