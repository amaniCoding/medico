'use client'
export default function MakeApp() {
  return (
    <section className="py-6 bg-[#f7fcfc]">
      <div className="max-w-[1150px] mx-auto">
        <p className="text-3xl font-bold pb-3 text-center uppercase">Make an Appointment</p>
        <div className="flex items-center justify-center">
          <p className="border-b-[4px] border-b-[#3FBBC0] w-20 text-center"></p>
        </div>
        <p className="my-4 text-center">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>

        <div className="grid md:grid-cols-3 gap-3 grid-cols-1">
          <div className="p-2">
            <input type="text" className="p-3 py-2 w-full block border-[1px] border-[#ced4da] placeholder:text-[#495057]" placeholder="Your name"></input>
          </div>
          <div className="p-2">
            <input type="text" className="p-3 w-full block border-[1px] border-[#ced4da] placeholder:text-[#495057]" placeholder="Your email"></input>
          </div>
          <div className="p-2">
            <input type="text" className="px-3 p-3 w-full block border-[1px] border-[#ced4da] placeholder:text-[#495057]" placeholder="Your phone"></input>
          </div>
          <div className="p-2">
            <input type="text" className="p-3 w-full block border-[1px] border-[#ced4da] placeholder:text-[#495057]" placeholder="Appointment Date"></input>
          </div>
          <div className="p-2">
            <select className="p-3 w-full block border-[1px] border-[#ced4da] placeholder:text-[#495057]">
              <option className="">Select Department</option>
              <option>Department 1</option>
              <option>Department 2</option>
              <option>Department 3</option>
              <option>Department 4</option>
            </select>
          </div>
        </div>
        <div className="my-2 p-2">
          <textarea className="border-[1px] p-3 border-[#ced4da] placeholder:text-[#495057] w-full" rows={5} placeholder="Message (optional)">

          </textarea>
        </div>
        <div className="my-2 text-center">
          <button className="px-7 py-2 bg-[#3FBBC0] text-white rounded-3xl">Make An Appointment</button>
        </div>
      </div>
    </section>
  )
}