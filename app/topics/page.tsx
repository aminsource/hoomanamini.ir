import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-2xl md:leading-14">
            به صفحه دسته‌بندی مقالات وبلاگ خوش آمدید!
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            در این بخش، مقالات وبلاگ به صورت موضوعی دسته‌بندی شده‌اند تا به شما کمک کنند به سادگی و
            سریع به محتوای مورد علاقه خود دسترسی پیدا کنید. موضوعاتی مانند برنامه‌نویسی، هوش مصنوعی،
            طراحی و بسیاری موارد دیگر در اینجا گردآوری شده‌اند. با انتخاب هر دسته‌بندی، می‌توانید
            مقالات مرتبط را مشاهده کنید و از خواندن آن‌ها لذت ببرید.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
