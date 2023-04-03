import training_class_data as tcd
import json
import csv

CSV_PATH = 'C:\\git\\Dog-Smartz-Unleashed-Frontend-POC\\Python\\Dog Smarts Data.csv'


def import_csv_with_csv():
    with open(CSV_PATH) as csvfile:
        reader = csv.reader(csvfile, delimiter=',')
        next(reader, None)

        training_data_list = []

        for row in reader:
            training_class_info = tcd.TrainingClassInfo(row)
            training_data_list.append(training_class_info.create_dictionary())

        return {'data': training_data_list}


def generate_json_data_file(json_data_object):
    with open('data.json', 'w') as outfile:
        json.dump(json_data_object, outfile, indent=4)


if __name__ == '__main__':
    json_data_object = import_csv_with_csv()
    generate_json_data_file(json_data_object)
