import math

class TrainingClassInfo:
    # For CSV reader
    LOCATION = {'inputName': 'Location', 'index': 0, 'outputName': 'location'}
    CLASS_NAME = {'inputName': 'Class Name', 'index': 1, 'outputName': 'className'}
    CLASS_TYPE = {'inputName': 'Class Type', 'index': 2, 'outputName': 'classType'}
    FIRST_CLASS_INFO = {'inputName': 'First Class Info', 'index': 3, 'outputName': 'firstClassInfo'}
    SKIP_DAY = {'inputName': 'Skip Day', 'index': 4, 'outputName': 'skipDay'}
    PRICE = {'inputName': 'Price', 'index': 5, 'outputName': 'price'}
    INSTRUCTOR_NAME = {'inputName': 'Instructor Name', 'index': 6, 'outputName': 'instructorName'}
    START_DATE_AND_TIME = {'inputName': 'Start Date and Time', 'index': 7, 'outputName': 'startDateAndTime'}


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
        training_data_dictionary = {TrainingClassInfo.LOCATION['outputName']: self.location,
            TrainingClassInfo.CLASS_NAME['outputName']: self.class_name,
            TrainingClassInfo.CLASS_TYPE['outputName']: self.class_type,
            TrainingClassInfo.FIRST_CLASS_INFO['outputName']: self.first_class_time,
            TrainingClassInfo.SKIP_DAY['outputName']: self.skip_day,
            TrainingClassInfo.PRICE['outputName']: self.price,
            TrainingClassInfo.INSTRUCTOR_NAME['outputName']: self.instructor_name,
            TrainingClassInfo.START_DATE_AND_TIME['outputName']: self.start_date_and_time
            }

        return training_data_dictionary

