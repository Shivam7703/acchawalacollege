import { gql } from "@apollo/client";

export const GET_BLOGS = gql`
  query GetBlogs {
    blogs {
      data {
        id
        attributes {
          blog_title
        }
      }
    }
  }
`;

export const GET_COURSES = gql`
  query GetCourses {
    courses {
      data {
        id
        attributes {
          course_name
        }
      }
    }
  }
`;

export const GET_HOME_PAGE = gql`
query GetHomeSection {
    homepages {
      data {
        id
        attributes {
          homebanner {
            id
            title {
              t1
              t2
              t3
            }
            text1
            button1 {
              text
              href
            }
            button2 {
              text
              href
            }
            img {
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
            text2
            text3
          }
          section2 {
            card1 {
              icon {
                data {
                  id
                  attributes {
                    url
                    alternativeText
                    width
                    height
                  }
                }
              }
              title
              text
            }
            card2 {
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
              title
              text
            }
            card3 {
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
              title
              text
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
                    url
                    alternativeText
                    width
                    height
                  }
                }
              }
          }
          banner2 {
            title {
              t1
              t2
              t3
            }
            text
            steps {
              data {
                id
                attributes {
                  text
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
            bg{
              data{
                id
                attributes{
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

export const GET_PARTNERS = gql`
  query GetPartners {
    homepages {
      data {
        id
        attributes {
          sponsors{
            id
            partners {
            id
            title
            images {
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
  }
`;

export const GET_COUNSELLING_PACKAGES = gql`
 query GetCounsellingPackages {
    homepages {
      data {
        id
        attributes {
           counsellingPackages{
            id
            title
            CounsellingPackagesCards {
              id
              id_no
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
              PackageName
              isPopular
              price
              text1
              lists {
                data {
                  id
                  attributes {
                    isInclude
                    text
                    college {
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
              button {
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
        }
      }
    }
  }
`;

export const GET_COLLEGES = gql`
  query GetColleges {
    colleges {
      data {
        id
        attributes {
          college_name
        }
      }
    }
  }
`;

export const GET_TOP_COLLEGES = gql`
  query GetTopColleges {
    colleges(filters: { is_top: { eq: true } }) {
      data {
        id
        attributes {
          college_name
        }
      }
    }
  }
`;

export const GET_COLLEGES_BY_ID = gql`
  query GetCollegesById($collegeId: ID!) {
    college(id: $collegeId) {
      data {
        id
        attributes {
          college_name
        }
      }
    }
  }
`;

export const GET_EXAMS = gql`
  query GetExams {
    exams {
      data {
        id
        attributes {
          exam_name
        }
      }
    }
  }
`;

export const GET_EXAMS_LEVEL = gql`
  query GetExamLevel {
    examLevels {
      data {
        id
        attributes {
          exam_level_name
        }
      }
    }
  }
`;

export const GET_EXAM_BY_ID = gql`
  query GetExamById($examId: ID!) {
    exam(id: $examId) {
      data {
        id
        attributes {
          exam_name
        }
      }
    }
  }
`;

export const GET_FEATURED_EXAMS = gql`
  query GetFeaturedExams {
    exams(filters: { isFeaturedExam: { eq: true } }) {
      data {
        id
        attributes {
          exam_name
        }
      }
    }
  }
`;
