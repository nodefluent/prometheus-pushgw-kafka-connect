"use strict";

const path = require("path");

const config = {
    kafka: {
        //zkConStr: "localhost:2181/",
        kafkaHost: "localhost:9092",
        logger: null,
        groupId: "kc-prometheus-group",
        clientName: "kc-prometheus-client",
        workerPerPartition: 1,
        options: {
            sessionTimeout: 8000,
            protocol: ["roundrobin"],
            fromOffset: "earliest", //latest
            fetchMaxBytes: 1024 * 100,
            fetchMinBytes: 1,
            fetchMaxWaitMs: 10,
            heartbeatInterval: 250,
            retryMinTimeout: 250,
            autoCommit: true,
            autoCommitIntervalMs: 1000,
            requireAcks: 1,
            //ackTimeoutMs: 100,
            //partitionerType: 3
        },
        noptions: {
            "metadata.broker.list": "localhost:9092",
            "group.id": "ca-local-test-group-rj",
            "enable.auto.commit": true,
            "event_cb": true,
            "api.version.request": true
        },
    },
    topic: "kc-prometheus-pushgw",
    partitions: 1,
    maxTasks: 1,
    pollInterval: 250,
    produceKeyed: true,
    produceCompressionType: 0,
    connector: {
        options: {
            proto: "http",
            host: "localhost",
            port: 9091,
            job: "pushgateway_job",
            logging: () => {}
        },
    },
    http: {
        port: 3149,
        middlewares: []
    },
    enableMetrics: true
};

module.exports = config;
