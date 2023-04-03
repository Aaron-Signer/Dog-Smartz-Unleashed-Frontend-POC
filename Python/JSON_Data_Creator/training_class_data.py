import math

class TrainingClassInfo:
    # For CSV reader
    LOCATION = {'name': 'Location', 'index': 0}
    CLASS_NAME = {'name': 'Class Name', 'index': 1}
    CLASS_TYPE = {'name': 'Class Type', 'index': 2}
    FIRST_CLASS_INFO = {'name': 'First Class Info', 'index': 3}
    SKIP_DAY = {'name': 'Skip Day', 'index': 4}
    PRICE = {'name': 'Price', 'index': 5}
    INSTRUCTOR_NAME = {'name': 'Instructor Name', 'index': 6}
    START_DATE_AND_TIME = {'name': 'Start Date and Time', 'index': 7}


    # For Pandas
    # LOCATION = 'Location'
    # CLASS_NAME = 'Class Name'
    # CLASS_TYPE = 'Class Type'
    # FIRST_CLASS_TIME = 'First Class Time'
    # NO_DOG_FIRST_CLASS = 'No dog first class'
    # SKIP_DAY = 'Skip Day'
    # MISC = 'misc'

    def __init__(self, row):
        self.location = row[TrainingClassInfo.LOCATION['index']]
        self.class_name = row[TrainingClassInfo.CLASS_NAME['index']]
        self.class_type = row[TrainingClassInfo.CLASS_TYPE['index']]
        self.first_class_time = row[TrainingClassInfo.FIRST_CLASS_INFO['index']]
        self.skip_day = row[TrainingClassInfo.SKIP_DAY['index']]
        self.price = row[TrainingClassInfo.PRICE['index']]
        self.instructor_name = row[TrainingClassInfo.INSTRUCTOR_NAME['index']]
        self.start_date_and_time = row[TrainingClassInfo.START_DATE_AND_TIME['index']]


    def create_dictionary(self):
        training_data_dictionary = {TrainingClassInfo.LOCATION['name']: self.location,
            TrainingClassInfo.CLASS_NAME['name']: self.class_name,
            TrainingClassInfo.CLASS_TYPE['name']: self.class_type,
            TrainingClassInfo.FIRST_CLASS_INFO['name']: self.first_class_time,
            TrainingClassInfo.SKIP_DAY['name']: self.skip_day,
            TrainingClassInfo.PRICE['name']: self.price,
            TrainingClassInfo.INSTRUCTOR_NAME['name']: self.instructor_name,
            TrainingClassInfo.START_DATE_AND_TIME['name']: self.start_date_and_time
            }

        return training_data_dictionary

