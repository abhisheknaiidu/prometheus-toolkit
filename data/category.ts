export const categories = [
  {
    text: "Basic resource monitoring",
    key: "basic_resource_monitoring",
    icon: "monitoring_icon",
    description:
      "Monitoring of basic resources including hosts, hardware, and containers.",
    rules: 106,
    subcategories: {
      "Prometheus self-monitoring": {
        text: "Prometheus self-monitoring",
        key: "prometheus-self-monitoring",
        icon: "/icons/prometheus_color.svg",
        description: "Self-monitoring of Prometheus instances.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/prometheus-self-monitoring/embedded-exporter.yml",
        rules: 10,
      },
      "Host and hardware": {
        text: "Host and hardware",
        key: "host-and-hardware",
        icon: "/icons/settings.svg",
        description: "Monitoring of host systems and hardware components.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/host-and-hardware/node-exporter.yml",
        rules: 15,
      },
      "S.M.A.R.T Device Monitoring": {
        text: "S.M.A.R.T Device Monitoring",
        key: "smart-device-monitoring",
        icon: "/icons/settings.svg",
        description: "Monitoring of S.M.A.R.T enabled devices.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/s.m.a.r.t-device-monitoring/smartctl-exporter.yml",
        rules: 8,
      },
      "Docker containers": {
        text: "Docker containers",
        key: "docker_containers",
        icon: "/icons/docker.svg",
        description: "Monitoring of Docker containers.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/docker-containers/google-cadvisor.yml",
        rules: 20,
      },
      Blackbox: {
        text: "Blackbox",
        key: "blackbox",
        icon: "/icons/settings.svg",
        description: "Blackbox monitoring.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/blackbox/blackbox-exporter.yml",
        rules: 5,
      },
      "Windows Server": {
        text: "Windows Server",
        key: "windows_server",
        icon: "/icons/windows.svg",
        description: "Monitoring of Windows Server instances.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/windows-server/windows-exporter.yml",
        rules: 12,
      },
      VMware: {
        text: "VMware",
        key: "vmware",
        icon: "/icons/vmware.svg",
        description: "Monitoring of VMware environments.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/vmware/pryorda-vmware-exporter.yml",
        rules: 18,
      },
      Netdata: {
        text: "Netdata",
        key: "netdata",
        icon: "/icons/netdata.svg",
        description: "Monitoring using Netdata.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/netdata/embedded-exporter.yml",
        rules: 18,
      },
    },
  },
  {
    text: "Databases and brokers",
    key: "databases_and_brokers",
    icon: "database_icon",
    description: "Monitoring of various databases and message brokers.",
    rules: 186,
    subcategories: {
      MySQL: {
        text: "MySQL",
        key: "mysql",
        icon: "/icons/settings.svg",
        description: "Monitoring of MySQL databases.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/mysql/mysqld-exporter.yml",
        rules: 20,
      },
      PostgreSQL: {
        text: "PostgreSQL",
        key: "postgresql",
        icon: "/icons/settings.svg",
        description: "Monitoring of PostgreSQL databases.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/postgresql/postgres-exporter.yml",
        rules: 20,
      },
      "SQL Server": {
        text: "SQL Server",
        key: "sql_server",
        icon: "/icons/settings.svg",
        description: "Monitoring of SQL Server databases.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/sql-server/ozarklake-mssql-exporter.yml",
        rules: 15,
      },
      Patroni: {
        text: "Patroni",
        key: "patroni",
        icon: "/icons/settings.svg",
        description: "Monitoring of Patroni clusters.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/patroni/embedded-exporter-patroni.yml",
        rules: 10,
      },
      PGBouncer: {
        text: "PGBouncer",
        key: "pgbouncer",
        icon: "/icons/settings.svg",
        description: "Monitoring of PGBouncer instances.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/pgbouncer/spreaker-pgbouncer-exporter.yml",
        rules: 8,
      },
      Redis: {
        text: "Redis",
        key: "redis",
        icon: "/icons/settings.svg",
        description: "Monitoring of Redis databases.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/redis/oliver006-redis-exporter.yml",
        rules: 15,
      },
      MongoDB: {
        text: "MongoDB",
        key: "mongodb",
        icon: "/icons/settings.svg",
        description: "Monitoring of MongoDB databases.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/mongodb/percona-mongodb-exporter.yml",
        rules: 15,
      },
      RabbitMQ: {
        text: "RabbitMQ",
        key: "rabbitmq",
        icon: "/icons/settings.svg",
        description: "Monitoring of RabbitMQ brokers.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/rabbitmq/rabbitmq-exporter.yml",
        rules: 12,
      },
      Elasticsearch: {
        text: "Elasticsearch",
        key: "elasticsearch",
        icon: "/icons/settings.svg",
        description: "Monitoring of Elasticsearch clusters.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/elasticsearch/prometheus-community-elasticsearch-exporter.yml",
        rules: 15,
      },
      Cassandra: {
        text: "Cassandra",
        key: "cassandra",
        icon: "/icons/settings.svg",
        description: "Monitoring of Cassandra databases.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/cassandra/instaclustr-cassandra-exporter.yml",
        rules: 10,
      },
      Clickhouse: {
        text: "Clickhouse",
        key: "clickhouse",
        icon: "/icons/settings.svg",
        description: "Monitoring of Clickhouse databases.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/clickhouse/embedded-exporter.yml",
        rules: 8,
      },
      Zookeeper: {
        text: "Zookeeper",
        key: "zookeeper",
        icon: "/icons/settings.svg",
        description: "Monitoring of Zookeeper instances.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/zookeeper/dabealu-zookeeper-exporter.yml",
        rules: 10,
      },
      Kafka: {
        text: "Kafka",
        key: "kafka",
        icon: "/icons/settings.svg",
        description: "Monitoring of Kafka brokers.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/kafka/danielqsj-kafka-exporter.yml",
        rules: 15,
      },
      Pulsar: {
        text: "Pulsar",
        key: "pulsar",
        icon: "/icons/settings.svg",
        description: "Monitoring of Pulsar brokers.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/pulsar/embedded-exporter.yml",
        rules: 8,
      },
      Nats: {
        text: "Nats",
        key: "nats",
        icon: "/icons/settings.svg",
        description: "Monitoring of Nats brokers.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/nats/nats-exporter.yml",
        rules: 8,
      },
      Solr: {
        text: "Solr",
        key: "solr",
        icon: "/icons/settings.svg",
        description: "Monitoring of Solr instances.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/solr/embedded-exporter.yml",
        rules: 10,
      },
      Hadoop: {
        text: "Hadoop",
        key: "hadoop",
        icon: "/icons/settings.svg",
        description: "Monitoring of Hadoop clusters.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/hadoop/jmx_exporter.yml",
        rules: 12,
      },
    },
  },
  {
    text: "Reverse proxies and load balancers",
    key: "reverse_proxies_and_load_balancers",
    icon: "proxy_icon",
    description: "Monitoring of reverse proxies and load balancers.",
    rules: 42,
    subcategories: {
      Nginx: {
        text: "Nginx",
        key: "nginx",
        icon: "/icons/settings.svg",
        description: "Monitoring of Nginx servers.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/nginx/knyar-nginx-exporter.yml",
        rules: 10,
      },
      Apache: {
        text: "Apache",
        key: "apache",
        icon: "/icons/settings.svg",
        description: "Monitoring of Apache servers.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/apache/lusitaniae-apache-exporter.yml",
        rules: 10,
      },
      HaProxy: {
        text: "HaProxy",
        key: "haproxy",
        icon: "/icons/settings.svg",
        description: "Monitoring of HaProxy instances.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/haproxy/embedded-exporter-v2.yml",
        rules: 12,
      },
      Traefik: {
        text: "Traefik",
        key: "traefik",
        icon: "/icons/settings.svg",
        description: "Monitoring of Traefik instances.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/traefik/embedded-exporter-v2.yml",
        rules: 10,
      },
    },
  },
  {
    text: "Runtimes",
    key: "runtimes",
    icon: "/icons/settings.svg",
    description: "Monitoring of various runtime environments.",
    rules: 4,
    subcategories: {
      "PHP-FPM": {
        text: "PHP-FPM",
        key: "php_fpm",
        icon: "/icons/settings.svg",
        description: "Monitoring of PHP-FPM instances.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/php-fpm/bakins-fpm-exporter.yml",
        rules: 2,
      },
      JVM: {
        text: "JVM",
        key: "jvm",
        icon: "/icons/settings.svg",
        description: "Monitoring of JVM instances.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/jvm/jvm-exporter.yml",
        rules: 1,
      },
      Sidekiq: {
        text: "Sidekiq",
        key: "sidekiq",
        icon: "/icons/settings.svg",
        description: "Monitoring of Sidekiq instances.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/sidekiq/strech-sidekiq-exporter.yml",
        rules: 1,
      },
    },
  },
  {
    text: "Orchestrators",
    key: "orchestrators",
    icon: "orchestrator_icon",
    description: "Monitoring of orchestration tools.",
    rules: 67,
    subcategories: {
      Kubernetes: {
        text: "Kubernetes",
        key: "kubernetes",
        icon: "/icons/settings.svg",
        description: "Monitoring of Kubernetes clusters.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/kubernetes/kubestate-exporter.yml",
        rules: 20,
      },
      Nomad: {
        text: "Nomad",
        key: "nomad",
        icon: "/icons/settings.svg",
        description: "Monitoring of Nomad clusters.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/nomad/embedded-exporter.yml",
        rules: 10,
      },
      Consul: {
        text: "Consul",
        key: "consul",
        icon: "/icons/settings.svg",
        description: "Monitoring of Consul instances.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/consul/consul-exporter.yml",
        rules: 10,
      },
      Etcd: {
        text: "Etcd",
        key: "etcd",
        icon: "/icons/settings.svg",
        description: "Monitoring of Etcd instances.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/etcd/embedded-exporter.yml",
        rules: 7,
      },
      Linkerd: {
        text: "Linkerd",
        key: "linkerd",
        icon: "/icons/settings.svg",
        description: "Monitoring of Linkerd instances.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/linkerd/embedded-exporter.yml",
        rules: 5,
      },
      Istio: {
        text: "Istio",
        key: "istio",
        icon: "/icons/settings.svg",
        description: "Monitoring of Istio service mesh.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/istio/embedded-exporter.yml",
        rules: 8,
      },
      ArgoCD: {
        text: "ArgoCD",
        key: "argocd",
        icon: "/icons/settings.svg",
        description: "Monitoring of ArgoCD instances.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/argocd/embedded-exporter.yml",
        rules: 7,
      },
    },
  },
  {
    text: "Network, security and storage",
    key: "network_security_storage",
    icon: "network_icon",
    description: "Monitoring of network, security, and storage systems.",
    rules: 40,
    subcategories: {
      Ceph: {
        text: "Ceph",
        key: "ceph",
        icon: "/icons/settings.svg",
        description: "Monitoring of Ceph storage clusters.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/ceph/embedded-exporter.yml",
        rules: 5,
      },
      SpeedTest: {
        text: "SpeedTest",
        key: "speedtest",
        icon: "/icons/settings.svg",
        description: "Monitoring of network speed tests.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/speedtest/nlamirault-speedtest-exporter.yml",
        rules: 3,
      },
      ZFS: {
        text: "ZFS",
        key: "zfs",
        icon: "/icons/settings.svg",
        description: "Monitoring of ZFS file systems.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/zfs/node-exporter.yml",
        rules: 4,
      },
      OpenEBS: {
        text: "OpenEBS",
        key: "openebs",
        icon: "/icons/settings.svg",
        description: "Monitoring of OpenEBS storage.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/openebs/embedded-exporter.yml",
        rules: 4,
      },
      Minio: {
        text: "Minio",
        key: "minio",
        icon: "/icons/settings.svg",
        description: "Monitoring of Minio storage.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/minio/embedded-exporter.yml",
        rules: 4,
      },
      "SSL/TLS": {
        text: "SSL/TLS",
        key: "ssl_tls",
        icon: "/icons/settings.svg",
        description: "Monitoring of SSL/TLS certificates.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/ssl/tls/ribbybibby-ssl-exporter.yml",
        rules: 5,
      },
      Juniper: {
        text: "Juniper",
        key: "juniper",
        icon: "/icons/settings.svg",
        description: "Monitoring of Juniper network devices.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/juniper/czerwonk-junos-exporter.yml",
        rules: 3,
      },
      CoreDNS: {
        text: "CoreDNS",
        key: "coredns",
        icon: "/icons/settings.svg",
        description: "Monitoring of CoreDNS instances.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/coredns/embedded-exporter.yml",
        rules: 3,
      },
      Freeswitch: {
        text: "Freeswitch",
        key: "freeswitch",
        icon: "/icons/settings.svg",
        description: "Monitoring of Freeswitch instances.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/freeswitch/znerol-freeswitch-exporter.yml",
        rules: 3,
      },
      "Hashicorp Vault": {
        text: "Hashicorp Vault",
        key: "hashicorp_vault",
        icon: "/icons/settings.svg",
        description: "Monitoring of Hashicorp Vault instances.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/hashicorp-vault/embedded-exporter.yml",
        rules: 3,
      },
      Cloudflare: {
        text: "Cloudflare",
        key: "cloudflare",
        icon: "/icons/settings.svg",
        description: "Monitoring of Cloudflare services.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/cloudflare/lablabs-cloudflare-exporter.yml",
        rules: 3,
      },
    },
  },
  {
    text: "Other",
    key: "other",
    icon: "other_icon",
    description: "Monitoring of other miscellaneous systems.",
    rules: 76,
    subcategories: {
      Thanos: {
        text: "Thanos",
        key: "thanos",
        icon: "/icons/settings.svg",
        description: "Monitoring of Thanos instances.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/thanos/thanos-compactor.yml",
        rules: 10,
      },
      Loki: {
        text: "Loki",
        key: "loki",
        icon: "/icons/settings.svg",
        description: "Monitoring of Loki instances.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/loki/embedded-exporter.yml",
        rules: 10,
      },
      Promtail: {
        text: "Promtail",
        key: "promtail",
        icon: "/icons/settings.svg",
        description: "Monitoring of Promtail instances.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/promtail/embedded-exporter.yml",
        rules: 10,
      },
      Cortex: {
        text: "Cortex",
        key: "cortex",
        icon: "/icons/settings.svg",
        description: "Monitoring of Cortex instances.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/cortex/embedded-exporter.yml",
        rules: 10,
      },
      Jenkins: {
        text: "Jenkins",
        key: "jenkins",
        icon: "/icons/settings.svg",
        description: "Monitoring of Jenkins instances.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/jenkins/metric-plugin.yml",
        rules: 10,
      },
      "APC UPS": {
        text: "APC UPS",
        key: "apc_ups",
        icon: "/icons/settings.svg",
        description: "Monitoring of APC UPS devices.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/apc-ups/apcupsd_exporter.yml",
        rules: 10,
      },
      "Graph Node": {
        text: "Graph Node",
        key: "graph_node",
        icon: "/icons/settings.svg",
        description: "Monitoring of Graph Node instances.",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/graph-node/embedded-exporter.yml",
        rules: 10,
      },
    },
  },
];
