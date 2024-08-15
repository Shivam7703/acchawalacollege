import { gql } from "@apollo/client";

export const getAllCollegesData = gql`
query collegesData {
  collegeDatas {
    data {
      id
      attributes {
        slug
        collegeLogo {
          data {
            id
            attributes {
              alternativeText
              width
              height
              url
            }
          }
        }
        breadCrumb
        bgImage {
          data {
            id
            attributes {
              alternativeText
              width
              height
              url
            }
          }
        }
        collegeName
        description
        location {
          id
          state {
            data {
              id
              attributes {
                name
              }
            }
          }
          city {
            data {
              id
              attributes {
                city_name
              }
            }
          }
        }
        collegeType {
          data {
            id
            attributes {
              college_type
            }
          }
        }
        affiliation {
          data {
            id
            attributes {
              affiliation
            }
          }
        }
        estYear
        exams {
          data {
            id
            attributes {
              exam_name
            }
          }
        }
        tabSections {
          id
          navItem
          sections {
            id
            title {
              data {
                id
                attributes {
                  t1
                  t2
                  t3
                }
              }
            }
            author {
              data {
                id
                attributes {
                  avatar {
                    data {
                      id
                      attributes {
                        name
                      }
                    }
                  }
                  name
                }
              }
            }
            article
            important_links {
              data {
                id
                attributes {
                  title
                  text
                  href
                }
              }
            }
            article1
            table
            article2
          }
        }
        topRecruiters {
          id
          title {
            t1
            t2
            t3
          }
          companyLogos {
            data {
              id
              attributes {
                alternativeText
                width
                height
                url
              }
            }
          }
        }
        brochureSection {
          id
          text
          buttons {
            button1 {
              data {
                id
                attributes {
                  text
                  href
                  colleges {
                    data {
                      id
                      attributes {
                        college_name
                      }
                    }
                  }
                }
              }
            }
          }
        }
        reviews {
          id
          title {
            t1
            t2
            t3
          }
          totalReviews
          overallRating
          individualReviews {
            id
            title
            icon {
              data {
                id
                attributes {
                  alternativeText
                  width
                  height
                  url
                }
              }
            }
            rating
            basedOn
          }
        }
        photoGallery {
          id
          title {
            t1
            t2
            t3
          }
          photos {
            data {
              id
              attributes {
                alternativeText
                width
                height
                url
              }
            }
          }
        }
        videoGallery {
          id
          title {
            t1
            t2
            t3
          }
          videos {
            title
            videoId
          }
        }
        faqs {
          id
          title {
            data {
              id
              attributes {
                t1
                t2
                t3
              }
            }
          }
          faqs_questions_and_answers {
            data {
              id
              attributes {
                faqsQuestionsAndAnswers {
                  question
                  answer
                }
              }
            }
          }
        }
        scholarship {
          title {
            t1
            t2
            t3
          }
          scholarshipsArray {
            slug
            logo {
              data {
                id
                attributes {
                  alternativeText
                  width
                  height
                  url
                }
              }
            }
            bgImage {
              data {
                id
                attributes {
                  alternativeText
                  width
                  height
                  url
                }
              }
            }
            title
            awardedTo
            date
            amount
            country
            scholarship_types {
              data {
                id
                attributes {
                  title
                }
              }
            }
            applicationStatus
            provider {
              data {
                id
                attributes {
                  provider
                }
              }
            }
            noOfScholarShipAvailable
            conductedBy
            courses {
              data {
                id
                attributes {
                  course_name
                }
              }
            }
            IsInternationalAllowed
            sequence
            isTop
            topSequence
          }
        }
        campusSize
        noOfFaculty
        noOfStudents
        avgFeePerYear
        avgFeePerSem
        avgPackage
        genderAccepted {
          data {
            id
            attributes {
              gender
            }
          }
        }
        study_modes {
          data {
            id
            attributes {
              mode
            }
          }
        }
        isAbroadCollege
        collegeSequence
        isTopCollege
        topCollegeSequence
        distanceFromAirport
        tag {
          data {
            id
            attributes {
              tags_name
            }
          }
        }
        banner1 {
          title
          text1
          button {
            text
            href
          }
          bgImg {
            data {
              id
              attributes {
                alternativeText
                width
                height
                url
              }
            }
          }
        }
      }
    }
  }
}




`;
