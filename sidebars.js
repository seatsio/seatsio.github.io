module.exports = {
    docs: [
        'index',
        'Getting Started/getting-started-intro',
        {
            "Quick Tutorial": [
                "Getting Started/getting-started-quick-tutorial/tutorial-draw-a-floor-plan",
                "Getting Started/getting-started-quick-tutorial/tutorial-create-an-event",
                "Getting Started/getting-started-quick-tutorial/tutorial-show-the-floor-plan-on-your-page",
                "Getting Started/getting-started-quick-tutorial/tutorial-collect-selected-seats",
                "Getting Started/getting-started-quick-tutorial/tutorial-book-selected-seats",
                "Getting Started/getting-started-quick-tutorial/tutorial-further-reading",
            ]
        },
        {
            "Rendering Floor Plans": [
                "Rendering Floor Plans/renderer-embed-a-floor-plan"
                // TODO add more here
            ]
        },
        {
            "REST API": [
                {
                    "Overview": [
                        "REST API/api-overview/api-authentication",
                        "REST API/api-overview/api-https",
                        "REST API/api-overview/api-gzip",
                        "REST API/api-overview/api-error-handling",
                        "REST API/api-overview/api-pagination",
                        "REST API/api-overview/api-expanding-objects",
                        "REST API/api-overview/api-uri-encoding",
                        "REST API/api-overview/api-client-libraries",
                    ]
                },
                {
                    "Objects": [
                        "REST API/api-objects",
                        "REST API/api-objects/api-book-objects",
                        "REST API/api-objects/api-release-objects",
                        "REST API/api-objects/api-temporarily-hold-objects",
                        "REST API/api-objects/api-custom-object-status",
                        "REST API/api-objects/api-general-admission-areas",
                        "REST API/api-objects/api-best-available",
                        "REST API/api-objects/api-season-tickets",
                        "REST API/api-objects/api-extra-data",
                        "REST API/api-objects/api-for-sale-not-for-sale",
                        "REST API/api-objects/api-change-object-status-in-batch",
                    ]
                },
                {
                    "Charts": [
                        "REST API/api-charts/api-list-all-charts",
                        "REST API/api-charts/api-retrieve-a-chart",
                        "REST API/api-charts/api-retrieve-a-chart-version",
                        "REST API/api-charts/api-create-a-chart",
                        "REST API/api-charts/api-update-a-chart",
                        "REST API/api-charts/api-validate-a-chart-version",
                        "REST API/api-charts/api-retrieve-a-chart-thumbnail",
                        "REST API/api-charts/api-publish-a-draft-version",
                        "REST API/api-charts/api-discard-a-draft-version",
                        "REST API/api-charts/api-list-charts-in-the-archive",
                        "REST API/api-charts/api-move-a-chart-to-the-archive",
                        "REST API/api-charts/api-move-a-chart-out-of-the-archive",
                        "REST API/api-charts/api-copy-a-chart",
                        "REST API/api-charts/api-charts-copy-chart-to-workspace",
                        "REST API/api-charts/api-charts-copy-draft-version",
                        "REST API/api-charts/api-charts-save-social-distancing-rulesets",
                    ]
                },
                {
                    "Chart tags": [
                        "REST API/api-chart-tags/api-list-tags-of-all-charts",
                        "REST API/api-chart-tags/api-add-a-tag-to-a-chart",
                        "REST API/api-chart-tags/api-remove-a-tag-from-a-chart",
                    ]
                },
                {
                    "Events": [
                        "REST API/api-events/api-list-events",
                        "REST API/api-events/api-retrieve-an-event",
                        "REST API/api-events/api-create-an-event",
                        "REST API/api-events/api-create-multiple-events",
                        "REST API/api-events/api-update-an-event",
                        "REST API/api-events/api-delete-an-event",
                        "REST API/api-events/api-list-events-for-a-chart",
                        "REST API/api-events/api-update-extra-data-for-an-object",
                        "REST API/api-events/api-update-extra-data-for-multiple-objects",
                        "REST API/api-events/api-retrieve-the-status-of-an-object",
                        "REST API/api-events/api-list-status-changes",
                        "REST API/api-events/api-list-status-changes-for-an-object",
                        "REST API/api-events/update-channels-for-an-event", // yes this is correct
                        "REST API/api-events/assign-objects-to-channels", // yes this is correct
                    ]
                },
                "REST API/chart-reports",
                {
                    "Event reports": [
                        "REST API/api-event-reports",
                        "REST API/api-event-reports/api-detailed-reports",
                        "REST API/api-event-reports/api-summary-reports",
                        "REST API/api-event-reports/api-deep-summary-reports",
                    ]
                },
                {
                    "Usage reports": [
                        "REST API/api-usage-reports", // TODO rename this in custom cleanup
                        "REST API/api-usage-reports/api-usage-report-all-months",
                        "REST API/api-usage-reports/api-usage-report-single-month",
                        "REST API/api-usage-reports/api-usage-report-event-month",
                    ]
                },
                {
                    "Hold tokens": [
                        "REST API/api-hold-tokens",
                        "REST API/api-hold-tokens/api-the-hold-token-object",
                        "REST API/api-hold-tokens/api-retrieve-a-hold-token",
                        "REST API/api-hold-tokens/api-create-a-hold-token",
                        "REST API/api-hold-tokens/api-change-expiration-date",
                    ]
                },
                {
                    "Workspaces": [
                        "REST API/api-workspaces",
                        "REST API/api-workspaces/api-workspaces-create",
                        "REST API/api-workspaces/api-workspaces-update",
                        "REST API/api-workspaces/api-workspaces-retrieve",
                        "REST API/api-workspaces/api-workspaces-list",
                        "REST API/api-workspaces/api-workspaces-regenerate-secret-key",
                        "REST API/api-workspaces/api-workspace-activate",
                        "REST API/api-workspaces/api-workspace-deactivate",
                    ]
                }
                // TODO Subaccounts deprecated
            ]
        },
        {
            "Event Manager": [
                "Event Manager/event-manager-introduction",
                "Event Manager/event-manager-how-to-embed",
                "Event Manager/event-manager-configuring",
                "Event Manager/event-manager-styling",
                "Event Manager/event-manager-reacting-to-events",
            ]
        },
        {
            "Chart Manager": [
                "Chart manager/chart-manager-introduction",
                "Chart manager/chart-manager-how-to-embed",
                "Chart manager/chart-manager-configuring",
                "Chart manager/chart-manager-styling",
                "Chart manager/chart-manager-reacting-to-events",
            ]
        },
        {
            "Embedded Designer": [
                "Embedded Designer/embedded-designer-introduction",
                {
                    "Configuration": [
                        "Embedded Designer/embedded-designer-configuration",
                        "Embedded Designer/embedded-designer-configuration/embedded-designer-configuration-divid",
                        "Embedded Designer/embedded-designer-configuration/embedded-designer-configuration-secretkey",
                        "Embedded Designer/embedded-designer-configuration/embedded-designer-configuration-chartkey",
                        "Embedded Designer/embedded-designer-configuration/embedded-designer-configuration-language",
                        "Embedded Designer/embedded-designer-configuration/embedded-designer-configuration-features",
                        "Embedded Designer/embedded-designer-configuration/mode",
                        "Embedded Designer/embedded-designer-configuration/embedded-designer-configuration-opendraftdrawing",
                        "Embedded Designer/embedded-designer-configuration/embedded-designer-configuration-onchartcreated",
                        "Embedded Designer/embedded-designer-configuration/embedded-designer-configuration-onchartupdated",
                        "Embedded Designer/embedded-designer-configuration/embedded-designer-configuration-onchartpublished",
                        "Embedded Designer/embedded-designer-configuration/embedded-designer-configuration-onexitrequested",
                        "Embedded Designer/embedded-designer-configuration/embedded-designer-configuration-ondesignerrendered",
                        "Embedded Designer/embedded-designer-configuration/ondesignerrenderingfailed",
                        "Embedded Designer/embedded-designer-configuration/openlatestdrawing",
                    ]
                },
                {
                    "Chart designer functions": [
                        "Embedded Designer/embedded-designer-functions",
                        "Embedded Designer/embedded-designer-functions/embedded-designer-functions-destroy",
                    ]
                }
            ]
        }
    ],
};
