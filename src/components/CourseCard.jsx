//rfce
function CourseCard({ course }) {
  return (
    <div className="course-item">
      <div className="course-item__img">
        <img src={course.imageUrl} alt={course.title} />
      </div>
      <div className="course-item__detail">
        <CourseCardBody
          description={course.description}
          title={course.title}
          rate={course.rate}
        />
        <CourseCardFooter
          tags={course.tags}
          start={course.start}
          status={course.status}
        />
      </div>
    </div>
  );
}

export default CourseCard;

function CourseCardBody({ description, title, rate }) {
  return (
    <div className="course-item__body">
      <div>
        <p className="title">{title}</p>
        <p className="desc">{description}</p>
      </div>
      <span className="rete">⭐️ {rate} </span>
    </div>
  );
}

function CourseCardFooter({ tags, start, status }) {
  const startedAt = new Date(start).toLocaleDateString("en-Us", {
    month: "short",
    year: "numeric",
    day: "numeric",
  });
  return (
    <div className="course-item__footer">
      <div className="tags">
        {/* //! no need return if use {} need return */}
        {tags.map((m) => (
          <span key={m} className="badge badge--secondary">
            {m}
          </span>
        ))}
      </div>
      <div className="caption">
        <div className="date">{startedAt}</div>
        <div
          className={`badge ${
            status === "Active"
              ? "badge--primary"
              : status === "Upcoming"
              ? "badge--danger"
              : "badge--secondary"
          }`}
        >
          {status}
        </div>
      </div>
    </div>
  );
}
