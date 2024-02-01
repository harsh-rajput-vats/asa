export const stages=[
  {
    "sourceTopicName": "ENU.ENS.PROCESS.COMPLETION.V1",
    "count": 12
  },
  {
    "sourceTopicName": "ENU.STRUCT.PROCESS.COMPLETION.V1",
    "count": 15
  },
  {
    "sourceTopicName": "ENU.META.PROCESS.COMPLETION.V1",
    "count": 8
  },
  {
    "sourceTopicName": "ENU.DEMO.PROCESS.COMPLETION.V1",
    "count": 23
  },
  {
    "sourceTopicName": "ENU.BIO.PROCESS.COMPLETION.V1",
    "count": 5
  },
  {
    "sourceTopicName": "QC.PROCESS.COMPLETION.V1",
    "count": 9
  },
  {
    "sourceTopicName": "ENU.SPORTAL.PROCESS.COMPLETION.V1",
    "count": 18
  },
  {
    "sourceTopicName": "ENU.ENROL.PROCESS.COMPLETION.V1",
    "count": 14
  },
  {
    "sourceTopicName": "ENU.POSTENROL.PROCESS.COMPLETION.V1",
    "count": 7
  },
  {
    "sourceTopicName": "ENU.SUCCESSINT.PROCESS.COMPLETION.V1",
    "count": 10
  },
  {
    "sourceTopicName": "ENU.REJECTINT.PROCESS.COMPLETION.V1",
    "count": 6
  }
]

export const packets=[
  {
    "type": "Reject Packets",
    "count": 6,
  },
  {
    "type": "Completed  Packets",
    "count": 10,
  }
]

export const stagesData= [
  {
      dlt_tracker_key: "key_001",
      refid: "ref_001",
      priority: 999,
      s3url: "https://s3.example.com/file001",
      sourceTopicname: "ENU.STRUCT.PROCESS.INTITIATION.V1",
      operator_disposal: "approved",
      operator_comments: "Processed successfully",
      resubmission_triggered: false,
      resubmission_count: 0,
      markForDelete: false,
      created_by: "DLTWORKFLOW",
      creation_date: "2023-08-25",
      last_updated_by: "user_002",
      last_updated_date: "2023-08-26",
      enrolment_type: "CHILD",
      srn: "srn_001",
      bitMap: "101010"
  },
  {
      dlt_tracker_key: "key_002",
      refid: "ref_002",
      priority: 111,
      s3url: "https://s3.example.com/file002",
      sourceTopicname: "ENU.META.PROCESS.COMPLETION.V1",
      operator_disposal: "rejected",
      operator_comments: "Data mismatch",
      resubmission_triggered: true,
      resubmission_count: 1,
      markForDelete: false,
      created_by: "user_003",
      creation_date: "2023-08-24",
      last_updated_by: "user_004",
      last_updated_date: "2023-08-26",
      enrolment_type: "update",
      srn: "srn_002",
      bitMap: "110011"
  },
  {
      dlt_tracker_key: "key_001",
      refid: "ref_001",
      priority: 999,
      s3url: "https://s3.example.com/file001",
      sourceTopicname: "ENU.META.PROCESS.COMPLETION.V1",
      operator_disposal: "approved",
      operator_comments: "Processed successfully",
      resubmission_triggered: false,
      resubmission_count: 0,
      markForDelete: false,
      created_by: "DLTWORKFLOW",
      creation_date: "2023-08-25",
      last_updated_by: "user_002",
      last_updated_date: "2023-08-26",
      enrolment_type: "CHILD",
      srn: "srn_001",
      bitMap: "101010"
  },
  {
      dlt_tracker_key: "key_002",
      refid: "ref_002",
      priority: 111,
      s3url: "https://s3.example.com/file002",
      sourceTopicname: "ENU.STRUCT.PROCESS.COMPLETION.V1",
      operator_disposal: "rejected",
      operator_comments: "Data mismatch",
      resubmission_triggered: true,
      resubmission_count: 1,
      markForDelete: false,
      created_by: "user_003",
      creation_date: "2023-08-24",
      last_updated_by: "user_004",
      last_updated_date: "2023-08-26",
      enrolment_type: "update",
      srn: "srn_002",
      bitMap: "110011"
  },
  {
      dlt_tracker_key: "key_001",
      refid: "ref_001",
      priority: 999,
      s3url: "https://s3.example.com/file001",
      sourceTopicname: "ENU.STRUCT.PROCESS.COMPLETION.V1",
      operator_disposal: "approved",
      operator_comments: "Processed successfully",
      resubmission_triggered: false,
      resubmission_count: 0,
      markForDelete: false,
      created_by: "DLTWORKFLOW",
      creation_date: "2023-08-25",
      last_updated_by: "user_002",
      last_updated_date: "2023-08-26",
      enrolment_type: "CHILD",
      srn: "srn_001",
      bitMap: "101010"
  },
  {
      dlt_tracker_key: "key_002",
      refid: "ref_002",
      priority: 111,
      s3url: "https://s3.example.com/file002",
      sourceTopicname: "METADATA.STRUCT.PROCESS.INTITIATION.V1",
      operator_disposal: "rejected",
      operator_comments: "Data mismatch",
      resubmission_triggered: true,
      resubmission_count: 1,
      markForDelete: false,
      created_by: "user_003",
      creation_date: "2023-08-24",
      last_updated_by: "user_004",
      last_updated_date: "2023-08-26",
      enrolment_type: "update",
      srn: "srn_002",
      bitMap: "110011"
  },
  {
    dlt_tracker_key: "key_001",
    refid: "ref_001",
    priority: 999,
    s3url: "https://s3.example.com/file001",
    sourceTopicname: "ENU.STRUCT.PROCESS.INTITIATION.V1",
    operator_disposal: "approved",
    operator_comments: "Processed successfully",
    resubmission_triggered: false,
    resubmission_count: 0,
    markForDelete: false,
    created_by: "DLTWORKFLOW",
    creation_date: "2023-08-25",
    last_updated_by: "user_002",
    last_updated_date: "2023-08-26",
    enrolment_type: "CHILD",
    srn: "srn_001",
    bitMap: "101010"
},
{
    dlt_tracker_key: "key_002",
    refid: "ref_002",
    priority: 111,
    s3url: "https://s3.example.com/file002",
    sourceTopicname: "METADATA.STRUCT.PROCESS.INTITIATION.V1",
    operator_disposal: "rejected",
    operator_comments: "Data mismatch",
    resubmission_triggered: true,
    resubmission_count: 1,
    markForDelete: false,
    created_by: "user_003",
    creation_date: "2023-08-24",
    last_updated_by: "user_004",
    last_updated_date: "2023-08-26",
    enrolment_type: "update",
    srn: "srn_002",
    bitMap: "110011"
},
{
    dlt_tracker_key: "key_001",
    refid: "ref_001",
    priority: 999,
    s3url: "https://s3.example.com/file001",
    sourceTopicname: "ENU.STRUCT.PROCESS.INTITIATION.V1",
    operator_disposal: "approved",
    operator_comments: "Processed successfully",
    resubmission_triggered: false,
    resubmission_count: 0,
    markForDelete: false,
    created_by: "DLTWORKFLOW",
    creation_date: "2023-08-25",
    last_updated_by: "user_002",
    last_updated_date: "2023-08-26",
    enrolment_type: "CHILD",
    srn: "srn_001",
    bitMap: "101010"
},
{
    dlt_tracker_key: "key_002",
    refid: "ref_002",
    priority: 111,
    s3url: "https://s3.example.com/file002",
    sourceTopicname: "METADATA.STRUCT.PROCESS.INTITIATION.V1",
    operator_disposal: "rejected",
    operator_comments: "Data mismatch",
    resubmission_triggered: true,
    resubmission_count: 1,
    markForDelete: false,
    created_by: "user_003",
    creation_date: "2023-08-24",
    last_updated_by: "user_004",
    last_updated_date: "2023-08-26",
    enrolment_type: "update",
    srn: "srn_002",
    bitMap: "110011"
},
{
    dlt_tracker_key: "key_001",
    refid: "ref_001",
    priority: 999,
    s3url: "https://s3.example.com/file001",
    sourceTopicname: "ENU.STRUCT.PROCESS.INTITIATION.V1",
    operator_disposal: "approved",
    operator_comments: "Processed successfully",
    resubmission_triggered: false,
    resubmission_count: 0,
    markForDelete: false,
    created_by: "DLTWORKFLOW",
    creation_date: "2023-08-25",
    last_updated_by: "user_002",
    last_updated_date: "2023-08-26",
    enrolment_type: "CHILD",
    srn: "srn_001",
    bitMap: "101010"
},
{
    dlt_tracker_key: "key_002",
    refid: "ref_002",
    priority: 111,
    s3url: "https://s3.example.com/file002",
    sourceTopicname: "METADATA.STRUCT.PROCESS.INTITIATION.V1",
    operator_disposal: "rejected",
    operator_comments: "Data mismatch",
    resubmission_triggered: true,
    resubmission_count: 1,
    markForDelete: false,
    created_by: "user_003",
    creation_date: "2023-08-24",
    last_updated_by: "user_004",
    last_updated_date: "2023-08-26",
    enrolment_type: "update",
    srn: "srn_002",
    bitMap: "110011"
},
]