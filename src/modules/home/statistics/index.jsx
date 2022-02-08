import Box from './box'

const HomeModuleStatistics = ({ university, kader, province }) => {
    return (
        <div className='w-full max-w-5xl mx-auto flex flex-col justify-between border-2 rounded-xl bg-white transform -translate-y-16 shadow-level-1 md:flex-row md:-translate-y-1/2'>
            <Box number={university} title='Kampus di seluruh Indonesia' />
            <Box number={kader} title='Kader dari kalangan mahasiswa' />
            <Box number={province} title='Provinsi di seluruh Indonesia' />
        </div>
    )
}

export default HomeModuleStatistics
