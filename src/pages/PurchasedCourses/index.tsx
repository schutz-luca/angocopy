/**
 * IMPORTS
 */
 import { CourseCard } from "components/coursecard";
 import { $CardContainer } from "components/coursecard/styles";
 import { Title } from "components/title";
 import { coursesMock } from "constants/coursesMock";
 import { MotionDiv } from "styles/motiondiv";
 
 /**
  * I am the purchased courses page
  */
 export const PurchasedCourses = () => {
 
     return (
         <MotionDiv>
             <Title
                 title="Cursos Comprados"
             />
             <$CardContainer style={{ marginTop: 20 }}>
                 {coursesMock.map(course => (
                     <CourseCard
                         key={course.title}
                         title={course.title}
                         description={course.description}
                         thumbnail={course.thumbnail}
                         rate={course.rate}
                         link={`/cursos-comprados/${course.id}`}
                         actionText="Acessar"
                     />
                 ))}
 
             </$CardContainer>
         </MotionDiv>
     )
 }