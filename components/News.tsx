interface NewsProps {
  imageUrl: string
  headline: string
}

const News = ({ imageUrl, headline }: NewsProps) => (
  <div className="flex flex-col mt-4 rounded-md border-2 border-gray">
      <div
        className="h-96 rounded-t"
        style={{
          backgroundImage: `url("${imageUrl}")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
      <div className="flex flex-col p-8">
        <div>
          <h3 className="text-slate-600">24 September, 2022</h3>
          <p className="mt-4 text-xl font-semibold">{headline}</p>
        </div>
        <div className="mt-4 flex flex-row-reverse">
          <button>Read more</button>
        </div>
      </div>
    </div>
)

export default News
