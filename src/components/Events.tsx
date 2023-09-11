import { useState } from "react";

export default function EventsComponent() {
  const eventsData = [
    {
      imgUrl: "g1.jpg",
      title:
        "Aenean eu justo vel mi consequat dignissim. Vestibulum ante ipsum primis in faucibus orci luctus.",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni ad reiciendis ducimus totam quos perferendis corporis. Quidem obcaecati, quasi amet qui laboriosam repellendus libero, deserunt praesentium iure cumque unde. Ipsa nemo sequi libero facilis accusamus quibusdam at error eaque animi placeat, tempora corporis repudiandae asperiores vel neque eum rem possimus. Aliquam labore laboriosam at? Animi deserunt sunt alias, nihil distinctio incidunt libero at ipsum minus deleniti, dolor harum aperiam aliquam reprehenderit modi molestias fugiat voluptate tempore dignissimos veniam officia dolores perspiciatis assumenda sed. Nobis, quas, perferendis officia repudiandae dolore neque ipsum nostrum sit architecto ad suscipit harum sunt exercitationem libero.",
    },
    {
      imgUrl: "g2.jpg",
      title:
        "Aenean eu justo vel mi consequat dignissim. Vestibulum ante ipsum primis in faucibus orci luctus.",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni ad reiciendis ducimus totam quos perferendis corporis. Quidem obcaecati, quasi amet qui laboriosam repellendus libero, deserunt praesentium iure cumque unde. Ipsa nemo sequi libero facilis accusamus quibusdam at error eaque animi placeat, tempora corporis repudiandae asperiores vel neque eum rem possimus. Aliquam labore laboriosam at? Animi deserunt sunt alias, nihil distinctio incidunt libero at ipsum minus deleniti, dolor harum aperiam aliquam reprehenderit modi molestias fugiat voluptate tempore dignissimos veniam officia dolores perspiciatis assumenda sed. Nobis, quas, perferendis officia repudiandae dolore neque ipsum nostrum sit architecto ad suscipit harum sunt exercitationem libero.",
    },
    {
      imgUrl: "g3.jpg",
      title:
        "Aenean eu justo vel mi consequat dignissim. Vestibulum ante ipsum primis in faucibus orci luctus.",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni ad reiciendis ducimus totam quos perferendis corporis. Quidem obcaecati, quasi amet qui laboriosam repellendus libero, deserunt praesentium iure cumque unde. Ipsa nemo sequi libero facilis accusamus quibusdam at error eaque animi placeat, tempora corporis repudiandae asperiores vel neque eum rem possimus. Aliquam labore laboriosam at? Animi deserunt sunt alias, nihil distinctio incidunt libero at ipsum minus deleniti, dolor harum aperiam aliquam reprehenderit modi molestias fugiat voluptate tempore dignissimos veniam officia dolores perspiciatis assumenda sed. Nobis, quas, perferendis officia repudiandae dolore neque ipsum nostrum sit architecto ad suscipit harum sunt exercitationem libero.",
    },
    {
      imgUrl: "g1.jpg",
      title:
        "Aenean eu justo vel mi consequat dignissim. Vestibulum ante ipsum primis in faucibus orci luctus.",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni ad reiciendis ducimus totam quos perferendis corporis. Quidem obcaecati, quasi amet qui laboriosam repellendus libero, deserunt praesentium iure cumque unde. Ipsa nemo sequi libero facilis accusamus quibusdam at error eaque animi placeat, tempora corporis repudiandae asperiores vel neque eum rem possimus. Aliquam labore laboriosam at? Animi deserunt sunt alias, nihil distinctio incidunt libero at ipsum minus deleniti, dolor harum aperiam aliquam reprehenderit modi molestias fugiat voluptate tempore dignissimos veniam officia dolores perspiciatis assumenda sed. Nobis, quas, perferendis officia repudiandae dolore neque ipsum nostrum sit architecto ad suscipit harum sunt exercitationem libero.",
    },
  ];
  const [selected, setSelected] = useState({
    imgUrl: "",
    title: "",
    text: "",
  });
  return (
    <>
      {selected.title !== "" ? (
        <div className="relative my-5 md:my-20 py-5 md:py-20 px-8 shadow-xl rounded-md">
          <button
            onClick={() => setSelected({ imgUrl: "", title: "", text: "" })}
            className="absolute top-0 right-0 md:top-4 md:right-4 font-bold text-red-500 text-3xl"
          >
            X
          </button>
          <div className="flex flex-col md:flex-row items-center md:gap-x-20">
            <img
              src={selected.imgUrl}
              className="w-full h-[400px] md:h-[600px] object-cover"
              alt={selected.title}
            />
            <h3 className="py-8 text-xl md:text-3xl font-bold text-justify">
              {selected.title}
            </h3>
          </div>
          <p className="text-lg md:text-2xl py-6 leading-relaxed">
            {selected.text}
          </p>
        </div>
      ) : (
        <div className="grid my-10 md:my-40 grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 md:gap-60">
          {eventsData.map((event, idx) => (
            <div className="p-4 shadow-lg" key={idx}>
              <img
                src={event.imgUrl}
                alt=""
                className="w-full h-96 object-cover"
              />
              <p className="py-8 text-xl md:text-3xl text-justify line-clamp-2">
                {event.title}
              </p>
              <button
                onClick={() => setSelected(event)}
                className="bg-red-500 text-2xl w-full text-center py-6 text-white"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
