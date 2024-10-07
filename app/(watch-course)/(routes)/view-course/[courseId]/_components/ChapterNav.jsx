import { PauseCircle, PlayCircle } from 'lucide-react';
import React, { useEffect, useState } from 'react';

function ChapterNav({ course, userCourse, setActiveChapter }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Only set the active chapter if chapters are available
    if (course?.chapter && Array.isArray(course.chapter) && course.chapter.length > 0) {
      setActiveChapter(course.chapter[0]);
    }
  }, []); // Add `course` and `setActiveChapter` as dependencies for robustness

  return (
    <div>
      {/* Course details section */}
      <div className='border-b p-5'>
        <h2 className='font-medium text-[20px]'>{course?.name || 'Course Name'}</h2>
        <h2 className='text-gray-500 text-[14px]'>{course?.author || 'Author Name'}</h2>
      </div>

      {/* Chapters listing section */}
      <div>
        {course?.chapter && Array.isArray(course.chapter) && course.chapter.length > 0 ? (
          course.chapter.map((chapter, index) => (
            <div
              key={index}
              className={`flex gap-2 text-gray-500 text-[16px] px-5 p-4 cursor-pointer hover:bg-gray-100 
                ${activeIndex === index ? 'bg-green-100 text-green-700' : ''}`}
              onClick={() => {
                setActiveIndex(index);
                setActiveChapter(chapter);
              }}
            >
              {activeIndex === index ? <PauseCircle /> : <PlayCircle />}
              <h2>{chapter.name || 'Chapter Name'}</h2>
            </div>
          ))
        ) : (
          <p>No chapters available.</p>
        )}
      </div>
    </div>
  );
}

export default ChapterNav;
